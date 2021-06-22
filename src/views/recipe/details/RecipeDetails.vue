<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <section class="section">
          <editable-text
            :initialValue="recipe.title"
            @update="updateField('title', ...arguments)"
          >
            <h1 class="title is-2 mb-1">{{ recipe.title }}</h1>
          </editable-text>
          <editable-text
            :initialValue="recipe.author"
            @update="updateField('author', ...arguments)"
          >
            <h2 class="subtitle is-5">
              {{ recipe.author }}
            </h2>
          </editable-text>
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
import EditableText from "../../../components/EditableText.vue";

export default {
  components: { EditableImage, EditableText },
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