<template>
    <div v-show="editing" class="field has-addons">
      <div class="control">
        <input ref="input" class="input" type="text" @keydown.esc="stopEdit" v-model="data" />
      </div>
      <div class="control">
        <button
          class="button"
          @click="
            $emit('update', data);
            stopEdit();
          "
        >
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
        </button>
      </div>
      <div class="control">
        <button
          class="button lightIcon"
          @click="stopEdit"
        >
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
    <div v-show="!editing" class="level">
      <div class="level-left titleContainer is-clickable" @click="startEdit">
        <slot />
        <div class="mBtnContainer">
          <span class="icon lightIcon">
            <i class="fas fa-pen fa-xs"></i>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["initialValue"],
  data() {
    return {
      editing: false,
      data: null,
      hover: false,
    };
  },
  methods: {
    stopEdit() {
      this.editing = false;
      this.data = this.initialValue;
    },
    startEdit() {
      this.editing = true;
      this.data = this.initialValue;
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="sass" scoped>
.titleContainer
  border: 1px solid transparent
  align-items: stretch
  &:hover
    border: 1px solid #d0d0d0
  &:hover div
    visibility: visible
.mBtnContainer
  margin-left: 0.2rem
  background: lightGrey
  visibility: hidden
.lightIcon
  color: grey
</style>