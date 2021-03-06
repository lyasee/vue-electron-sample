import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
