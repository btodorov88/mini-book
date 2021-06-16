<template>
  <section class="section">
    <router-link to="/newrecipe" class="button is-floating is-info">
      <i class="fas fa-plus"></i>
    </router-link>
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="item in recipes"
          :key="item.id"
        >
          <div class="card" @click="openDetails(item.id)">
            <div class="card-image">
              <figure class="image is-4by5">
                <img v-if="item.imgURL" :src="item.imgURL" alt="Title image" />
                <img v-else src="https://bulma.io/images/placeholders/1280x960.png" alt="Title image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ item.title }}
              </div>
              <p class="is-size-6">
                от <a href="/">{{ item.author }}</a>
              </p>
            </div>
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
        if (item.img) {
          item.imgURL = await fb.storage
            .ref()
            .child("images/" + item.id + "/" + item.img)
            .getDownloadURL();
        }
        return item;
      })
    );
    this.recipes = itemsArray;
  },
  methods: {
    openDetails(id) {
      this.$router.push("/recipes/" + id);
    },
  },
};
</script>

<style lang="scss">
</style>