import App from './App.vue';
import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';

import Layout from './components/Layout.vue';
import AdminLayout from './components/admin/Layout.vue';
import Index from './components/Index.vue';
import About from './components/About.vue';
import MenuList from './components/menu/List.vue';
import MenuDetail from './components/menu/Detail.vue';

import AdminMenuList from './components/admin/menu/List.vue';

/*

/menu/list
/menu/detail

/admin/menu/list
/admin/menu/detail

*/ 

const routes = [
  {path:'/index', component: Index},
  { path: '/', component: Layout, children:[
      {path:'menu', children:[
        {path:'list', component: MenuList},
        {path:':id', component: MenuDetail},
      ]},
      {path:'about', component: About},
  ]},
  { path: '/admin', component: AdminLayout, children:[
      // {path:'index', component: AdminMenuList},
      {path:'menu/list', component: AdminMenuList},
  ] },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

createApp(App)
.use(router)
.mount("#app");