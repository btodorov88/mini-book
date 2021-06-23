<template>
  <div class="container">
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
          <p class="is-size-6" style="white-space: pre">{{ recipe.ingredients }}</p>
          <br />
          <h5 class="title is-5">Начин на приготвяне</h5>
          <p class="is-size-6 has-text-justified" style="white-space: pre">{{ recipe.details }}</p>
        </section>
      </div>
      <div class="column is-5">
        <section class="section">
          <editable-image
            :url="titleImageUrl"
            @update-image="updateImage"
            :loading="loadingTitleImage"
          />
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import * as fb from "@/firebase/firebaseConfig";
import EditableImage from "../../../components/EditableImage.vue";
import EditableSubtitle from "../../../components/editable/EditableSubtitle.vue";
import EditableTitle from '../../../components/editable/EditableTitle.vue';

export default {
  components: { EditableImage, EditableSubtitle, EditableTitle },
  data() {
    return {
      recipe: { title: "" },
      titleImageUrl: null,
      loadingTitleImage: true,
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
      await this.loadTitleImage(item);
      this.loadingTitleImage = false;
    },
    async loadTitleImage(recipe) {
      if (recipe.img) {
        this.titleImageUrl = await fb.storage
          .ref()
          .child("images/" + recipe.id + "/" + recipe.img)
          .getDownloadURL();
      }
    },
    async updateField(name, value) {
      const id = this.$route.params.id;
      await fb.recipesCollection.doc(id).update({ [name]: value });
      const newRecipe = { ...this.recipe, [name]: value };
      this.recipe = newRecipe;
    },
    async updateImage(file) {
      this.loadingTitleImage = true;
      const data = await new Response(file).blob();

      const id = this.$route.params.id;

      await fb.storage
        .ref()
        .child("images/" + id + "/" + file.name)
        .put(data);
      await fb.recipesCollection.doc(id).update({ img: file.name });
      const newRecipe = { ...this.recipe, img: file.name };
      this.recipe = newRecipe;

      await this.loadTitleImage(newRecipe);
      this.loadingTitleImage = false;
    },
  },
};
</script>

<style>
</style>