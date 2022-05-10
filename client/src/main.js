import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue);

Vue.config.productionTip = true;

import VueCookies from 'vue-cookies';
Vue.use (VueCookies);

import axios from 'axios';
import Vueaxios from 'vue-axios';
Vue.use(Vueaxios, axios);

//http://localhost:10000
const axiosConfig = {

	baseURL: 'https://lingua.quest',
	timeout: 30000,
};
Vue.prototype.$axios = axios.create(axiosConfig)

import VueMq from 'vue-mq'
Vue.use(VueMq, {
    breakpoints: {
	  mobile: 450,
      tablet: 900,
	  laptop: 1250,
	  desktop: Infinity,
  }
})

new Vue({
  axios,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
