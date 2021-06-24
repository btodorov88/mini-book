<template>
  <editable-text :initialValue="initialValue" :textArea="true" v-on="$listeners">
    <p class="flex-grow is-size-6" style="white-space: pre-wrap">{{ initialValue }}</p>
  </editable-text>
</template>

<script>
import EditableText from "./EditableText.vue";
export default {
  components: { EditableText },
  props: ["initialValue"],
};
</script>