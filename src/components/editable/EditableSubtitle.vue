<template>
  <editable-text :initialValue="initialValue" v-on="$listeners">
    <h2 class="flex-grow subtitle has-text-grey is-5 mb-1">
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