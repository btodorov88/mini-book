<template>
  <editable-text :initialValue="initialValue" v-on="$listeners">
    <h2 class="subtitle is-5">
      {{ initialValue }}
    </h2>
  </editable-text>
</template>

<script>
import EditableText from "./EditableText.vue";
export default {
  components: { EditableText },
  props: ["initialValue"],
};
</script>