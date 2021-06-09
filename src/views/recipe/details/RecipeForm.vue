<template>
  <section class="section">
    <div class="field">
      <label class="label">Заглавие</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Заглавие на рецептата"
          v-model="recipe.title"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Рецепта</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Детайли за рецептата"
          v-model="recipe.details"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Автор</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Автор на рецептата"
          v-model="recipe.author"
        />
      </div>
    </div>

    <div class="field">
      <div class="file">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Изберете снимка</span>
          </span>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" v-on:click="save">Запази</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Откажи</button>
      </div>
    </div>
  </section>
</template>

<script>
import * as fb from "@/firebase/firebaseConfig";
import firebase from 'firebase/app';
export default {
  data() {
    return {
      recipe: {
        title: "",
        author: "Ивелина Димитрова",
        details: "",
      },
    };
  },
  methods: {
    async save() {
      await fb.recipesCollection.add({ ...this.recipe, created: firebase.firestore.Timestamp.fromDate(new Date()) });
      console.log(this.recipe);
    },
  },
};
</script>

<style>
</style>