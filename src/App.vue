<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/nav/Nav.vue";

export default {
  components: {
    Nav,
  },
};  
</script>

<style lang="scss">
#app {
  font-size: 20px;
  line-height: 1.4;
  color: #3b3737;
  background: #fff;
  word-wrap: break-word;
  font-family: 'Roboto Slab', serif;
  overflow-x: hidden;
}
</style>
