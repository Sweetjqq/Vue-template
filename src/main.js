import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */

// router.beforeEach((to, from, next) => {
//   console.log(store.state.Login.isLogin)
// })

// Vue.directive('has', {
//   bind: function (el, binding) {
//     if (!Vue.prototype.$_has(binding.value)) {
//       el.parentNode.removeChild(el);
//     }
//   }
// });


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})


