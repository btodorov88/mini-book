<template>
  <editable-text :initialValue="initialValue" v-on="$listeners">
    <h1 class="flex-grow title is-2 mb-1">{{ initialValue }}</h1>
  </editable-text>
</template>

<script>
import EditableText from "./EditableText.vue";
export default {
  components: { EditableText },
  props: ["initialValue"],
};
</script>