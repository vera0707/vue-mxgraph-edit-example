import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/open',
    name: 'Open',
    component: () => import(/* webpackChunkName: "openTopo" */ '../views/Open.vue'),
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "showTopo" */ '../views/Show.vue'),
  },
];
console.log('路由', process.env.BASE_URL);
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
