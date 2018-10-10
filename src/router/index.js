import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

let baseRoute = [
  {
    path: '/',
    name: 'Login',
    component: resolve => require(['@/view/Login/Login'], resolve),
  }, {
    path: '/Error',
    name: 'Error',
    component: resolve => require(['@/components/errorPage/error'], resolve),
  },
  {
    path: '/',
    name: '首页',
    component: (resolve) => require(['../../src/components/common/Home.vue'], resolve),
    children: [{
      path: '/page',
      name: '1',
      meta: {
        name: '1'
      },
      component: (resolve) => require(['../view/page/page.vue'], resolve)
    }]
  }
]

let router = new Router({
  routes: baseRoute
})

export default router;




