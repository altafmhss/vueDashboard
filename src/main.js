import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/home.vue';
import ZOS from './components/zos.vue';
import BFF from './components/bff.vue';
import Frontend from './components/frontend.vue';
import Azure from './components/azure.vue';

Vue.use(Router);
Vue.config.productionTip = false

const routes = [
  
  {
    name: 'home',
    path: '/',
    component: Home
  },

  

  {
    name: 'zos',
    path: '/zos',
    component: ZOS
  },
  {
    name: 'bff',
    path: '/bff',
    component: BFF
  },

  {
    name: 'frontend',
    path: '/frontend',
    component: Frontend
  },

  {
    name: 'azure',
    path: '/azure',
    component: Azure
  },
];


const router = new Router({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
