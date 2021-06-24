<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-6">
        <section class="section">
          <editable-title
            :initialValue="recipe.title"
            @update="updateField('title', ...arguments)"
          />
          <editable-subtitle
            :initialValue="recipe.author"
            @update="updateField('author', ...arguments)"
          />
          <br />
          <h5 class="title is-5">Съставки</h5>
          <editable-ingredients
            :initialValue="recipe.ingredients"
            @update="updateField('ingredients', ...arguments)"
          />
          <br />
          <h5 class="title is-5">Начин на приготвяне</h5>
          <editable-description
            :initialValue="recipe.details"
            @update="updateField('details', ...arguments)"
          />
        </section>
      </div>
      <div class="column is-5">
        <section class="section">
          <gallery :photos="images" />
          <input
            v-show="false"
            ref="uploader"
            type="file"
            accept="image/*"
            @change="onFileChanged"
          />
          <button
            class="is-block button mt-3 ml-auto"
            @click="$refs.uploader.click()"
          >
            <span class="icon">
              <i class="fas fa-upload"></i>
            </span>
            <span>Добавяне на снимка</span>
          </button>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import * as fb from "@/firebase/firebaseConfig";
import EditableSubtitle from "../../../components/editable/EditableSubtitle.vue";
import EditableTitle from "../../../components/editable/EditableTitle.vue";
import EditableIngredients from "../../../components/editable/EditableIngredients.vue";
import EditableDescription from "../../../components/editable/EditableDescription.vue";
import Gallery from "../../../components/gallery/Gallery.vue";

export default {
  components: {
    EditableSubtitle,
    EditableTitle,
    EditableIngredients,
    EditableDescription,
    Gallery,
  },
  data() {
    return {
      recipe: { title: "" },
      images: [],
    };
  },
  async created() {
    this.load();
  },
  methods: {
    async load() {
      const id = this.$route.params.id;
      if (!id) {
        return;
      }

      const doc = await fb.recipesCollection.doc(id).get();

      let item = doc.data();
      item.id = doc.id;

      this.recipe = item;
      await this.loadImages(item);
    },
    async loadImages(recipe) {
      const list = await fb.storage
        .ref()
        .child("images/" + recipe.id)
        .listAll();

      this.images = await Promise.all(list.items.map(async (i) => await i.getDownloadURL()));
    },
    async updateField(name, value) {
      const id = this.$route.params.id;
      await fb.recipesCollection.doc(id).update({ [name]: value });
      const newRecipe = { ...this.recipe, [name]: value };
      this.recipe = newRecipe;
    },
    async onFileChanged(e) {
      const file = e.target.files[0];
      if (!file) {
        return;
      }

      const data = await new Response(file).blob();

      const id = this.$route.params.id;

      await fb.storage
        .ref()
        .child("images/" + id + "/" + file.name)
        .put(data);

      this.loadImages(this.recipe);
    },
  },
};
</script>

<style>
</style>