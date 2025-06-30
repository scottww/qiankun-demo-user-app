import Vue from "vue";
import Router from "vue-router";
import HomeVue from "../views/homePage.vue";
import ProfileVue from "../views/profile.vue";
import NotFoundPage from "../views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "hash", // history 或 'hash'，看你需求
  base: window.__POWERED_BY_QIANKUN__ ? "/user" : "/", // 重点！
  routes: [
    {
      path: "/",
      component: HomeVue,
    },
    {
      path: "/profile",
      component: ProfileVue,
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
});
