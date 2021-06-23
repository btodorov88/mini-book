<template>
  <editable-text :initialValue="initialValue" :textArea="true" v-on="$listeners">
    <p class="flex-grow is-size-6 has-text-justified" style="white-space: pre">{{ initialValue }}</p>
  </editable-text>
</template>

<script>
import EditableText from "./EditableText.vue";
export default {
  components: { EditableText },
  props: ["initialValue"],
};
</script>