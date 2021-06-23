<template>
  <editable
    :initialValue="initialValue"
    :editing="editing"
    :stopEdit="stopEdit"
    :startEdit="startEdit"
    :save="save"
  >
    <template>
      <slot />
    </template>
    <template v-slot:input>
      <input v-if="!textArea"
        ref="input"
        class="input flex-grow"
        type="text"
        @keydown.esc="stopEdit"
        @keydown.enter="save"
        v-model="data"
      />
      <textarea v-else
        ref="input"
        class="textarea flex-grow"
        @keydown.esc="stopEdit"
        v-model="data"
      />
    </template>
  </editable>
</template>

<script>
import Editable from "./Editable.vue";
export default {
  components: { Editable },
  props: {
    initialValue: {
      type: String,
    },
    textArea : {
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      editing: false,
      data: null,
    };
  },
  methods: {
    save() {
      this.$emit("update", this.data);
      this.stopEdit();
    },
    stopEdit() {
      this.editing = false;
      this.data = this.initialValue;
    },
    startEdit() {
      this.editing = true;
      this.data = this.initialValue;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
  },
};
</script>

<style lang="sass" scoped>

</style>