<template>
  <div class="loader-wrapper is-active">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0.7;
  z-index: 1;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    height: 80px;
    width: 80px;
    border-width: 6px;
  }
}
</style>