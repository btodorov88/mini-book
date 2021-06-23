<template>
  <div class="level m-0">
    <div v-if="editing" class="is-flex flex-grow">
      <div class="flex-grow field has-addons" v-click-outside="stopEdit">
        <div class="flex-grow control">
          <slot name="input" />
        </div>
        <div class="control">
          <button class="button" @click="save">
            <span class="icon">
              <i class="fas fa-check"></i>
            </span>
          </button>
        </div>
        <div class="control">
          <button class="button lightIcon" @click="stopEdit">
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="is-flex flex-grow titleContainer is-clickable"
      @click="startEdit"
    >
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
  props: ['initialValue', 'editing', 'stopEdit', 'startEdit', 'save']
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