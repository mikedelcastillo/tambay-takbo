import Vue from 'vue';

import axios from 'axios';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Accepts'] = 'application/json';

Object.defineProperties(Vue.prototype, {$http:{get: function() {return axios}}});

import App from './vue/App.vue';

Vue.component('app-header', require('./vue/components/Header.vue').default);
Vue.component('app-archive', require('./vue/components/Archive.vue').default);
Vue.component('app-single', require('./vue/components/Single.vue').default);
Vue.component('app-footer', require('./vue/components/Footer.vue').default);

window.$vm = new Vue({
  el: "#app",
  render: h => h(App),
});
