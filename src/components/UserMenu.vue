<template>
  <nav class="user-menu">
    <ul>
      <li><router-link to="/">子首页</router-link></li>
      <li><router-link to="/profile">个人资料</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "UserMenu",
};
</script>

<style scoped>
.user-menu {
  background: #555;
  padding: 10px;
}
.user-menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
.user-menu a {
  color: #fff;
  text-decoration: none;
}
</style>
