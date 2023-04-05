import App from './App.vue';
import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';

import Layout from './components/Layout.vue';
import AdminLayout from './components/admin/Layout.vue';
import Index from './components/Index.vue';
import About from './components/About.vue';
import MenuList from './components/menu/List.vue';
import MenuDetail from './components/menu/Detail.vue';

/*

/menu/list
/menu/detail

/admin/menu/list
/admin/menu/detail

*/ 

const routes = [
  { path: '/', component: Layout, children:[
      {path:'index', component: Index},
      {path:'menu/list', component: MenuList},
      {path:'menu/detail', component: MenuDetail},
      {path:'about', component: About},
  ]},
  { path: '/admin/index', component: AdminLayout },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

createApp(App)
.use(router)
.mount("#app");