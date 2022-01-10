import Vue from "vue"; //path relativo para npm
import App from "./App.vue";
import "@/assets/css/tailwind.css";

// rutas
import router from '@/router';


Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app"); //mount proposito el que renderiza en el template
