<template>
  <fragment>
    <div v-if="editing" class="field has-addons">
      <div class="control">
        <input class="input" type="text" v-model="data" />
      </div>
      <div class="control">
        <button
          class="button"
          @click="
            editing = !editing;
            $emit('update', data);
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
          @click="
            editing = !editing;
            data = initialValue;
          "
        >
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
    <div v-else class="level">
      <div
        class="level-left titleContainer is-clickable"
        @click="
          editing = !editing;
          data = initialValue;
        "
      >
        <slot/>
        <div class="mBtnContainer">
          <span class="icon lightIcon">
            <i class="fas fa-pen fa-xs"></i>
          </span>
        </div>
      </div>
    </div>
  </fragment>
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