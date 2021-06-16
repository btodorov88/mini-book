<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <section class="section">
          <h1 class="title is-2">{{ recipe.title }}</h1>
          <h2 class="subtitle is-4">
            {{ recipe.author }}
          </h2>
          <br />
          <p class='is-size-5' style="white-space: pre">{{ recipe.ingredients }}</p>
          <br />
          <p class='is-size-6' style="white-space: pre">{{ recipe.details }}</p>
        </section>
      </div>
      <div class="column is-5">
        <section class="section">
          <figure class="image is-4by3">
            <img v-if="recipe.imgURL" :src="recipe.imgURL" alt="Title image" />
            <img
              v-else
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Title image"
            />
          </figure>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import * as fb from "@/firebase/firebaseConfig";

export default {
  data() {
    return {
      recipe: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    if (!id) {
      return;
    }

    const doc = await fb.recipesCollection.doc(id).get();

    let item = doc.data();
    item.id = doc.id;
    if (item.img) {
      item.imgURL = await fb.storage
        .ref()
        .child("images/" + item.id + "/" + item.img)
        .getDownloadURL();
    }

    this.recipe = item;
  },
};
</script>

<style>
</style>