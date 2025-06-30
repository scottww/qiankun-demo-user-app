import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history', // 或 'hash'，看你需求
  routes: [
    {
      path: '/',
      component: {
        template: '<div>子应用首页</div>',
      },
    },
  ],
});
