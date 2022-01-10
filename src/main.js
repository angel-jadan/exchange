import Vue from "vue"; //path relativo para npm
import App from "./App.vue";
import "@/assets/css/tailwind.css"


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app"); //mount proposito el que renderiza en el template
