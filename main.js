import Vue from "vue";

import App from "./App.vue";

import Buefy from "buefy";

import "buefy/dist/buefy.css";

import "./assets/todo.scss";

import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
