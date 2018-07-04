// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './vuex/store';
import "./styles/index.scss";
import "./assets/font/iconfont.js";
import MintUI from 'mint-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
	
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
