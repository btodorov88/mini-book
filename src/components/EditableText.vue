<template>
  <fragment>
    <div v-if="editing" class="field has-addons">
      <div class="control">
        <input class="input" type="text" v-model="data" />
      </div>
      <div class="control">
        <button class="button is-primary" @click="editing = !editing; $emit('update', data)">
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
        </button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="editing = !editing; data=initialValue">
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
    <div v-else class="level">
      <div class="level-left titleContainer">
        <h1 v-if="!editing" class="title is-2">{{ initialValue }}</h1>
        <div class="mBtnContainer">
          <button
            v-if="!editing"
            class="button is-small editButton"
            @click="
              editing = !editing;
              data = initialValue;
            "
          >
            <span class="icon">
              <i class="fas fa-edit"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  props: ['initialValue'],
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
  background: lightGrey; 
  visibility: hidden
.editButton
  border: none
  background: none
</style>