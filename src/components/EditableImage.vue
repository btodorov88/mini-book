<template>
  <figure
    class="image is-4by3"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <img
      :src="url || 'https://bulma.io/images/placeholders/1280x960.png'"
      :alt="label"
    />

    <loader v-if="loading" />

    <div v-show="hover && !loading" class="overlay">
      <input
        v-show="false"
        ref="uploader"
        type="file"
        accept="image/*"
        @change="onFileChanged"
      />
      <button class="button" @click="$refs.uploader.click()">
        <span class="icon is-small">
          <i class="fas fa-camera" aria-hidden="true"></i>
        </span>
        <span>Промяна</span>
      </button>
    </div>
  </figure>
</template>

<script>
import Loader from './Loader.vue';
export default {
  components: { Loader },
  props: ["url", "label", "loading"],
  data: function () {
    return {
      hover: false,
    };
  },
  methods: {
    onFileChanged(e) {
      const file = e.target.files[0];
      if (file) {
        this.$emit("update-image", file);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.overlay
    position: absolute
    top: 5%
    right: 5%
</style>