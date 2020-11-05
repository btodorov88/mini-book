<template>
  <div class="nav">
    <div class="menuLeft">
      <router-link to="/about" class="menu-item">About</router-link>
      <router-link to="/inspiration" class="menu-item">Inspiration</router-link>
    </div>
    <div class="logo">
      <a><img src="@/assets/logo.png" alt="Mini Book" /></a>
    </div>
    <div class="menuRight">
      <router-link to="/recipes" class="menu-item">Recipes</router-link>
      <router-link to="/cookbook" class="menu-item">Cookbook</router-link>
      <a href="/#" class="menu-item"><i class="fas fa-search"></i></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 1240px;
  max-width: 100%;
  min-width: 320px;
  margin: 0 auto;
  padding: 40px 20px;

  font-weight: 500;
}

.menu-item {
  margin-left: 40px;

  text-decoration: none;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: normal;
  line-height: 23px;
  color: #a29186;
}
</style>