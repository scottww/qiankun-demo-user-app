import Vue from 'vue';
import App from './App.vue';
import router from './router';

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#subapp-viewport') : '#app');
}

// qiankun 必须导出三个生命周期函数
export async function bootstrap() {
  console.log('[user-app] bootstraped');
}

export async function mount(props) {
  console.log('[user-app] mounted');
  render(props);
}

export async function unmount() {
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
  }
}

// 非 qiankun 运行环境，直接渲染子应用（方便单独启动调试）
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
