<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="card column is-one-quarter" v-for="item in recipes" :key="item.id">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              {{ item.title }}
            </div>
            <p>by <a href="https://jgthms.com">{{ item.author }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as fb from "@/firebase/firebaseConfig";

export default {
  data() {
    return {
      recipes: null,
    };
  },
  async created() {
    const data = await fb.recipesCollection.orderBy("created").get();
    const itemsArray = await Promise.all(
      data.docs.map(async (doc) => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      })
    );
    this.recipes = itemsArray;
  },
};
</script>

<style>
</style>