<template>
  <div id="subapp-viewport">
    <UserMenu />
    <router-view />
  </div>
</template>

<script>
import UserMenu from "./components/UserMenu.vue";

export default {
  name: "App",
  components: {
    UserMenu,
  },
};
</script>

<style>
#subapp-viewport {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
