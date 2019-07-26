import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store/index'
import '@mdi/font/css/materialdesignicons.css'
// import GSAP from 'gsap'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify';

// Vue.use(GSAP);
// Vue.http.options.root = 'http://localhost/lccares_alpha/wp-json/';
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
