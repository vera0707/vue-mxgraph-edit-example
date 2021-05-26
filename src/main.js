import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'element-plus/lib/theme-chalk/index.css';
import '@/style/mxgraph.css';
import '@/style/reset.css';

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
