import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./main.css";
import "@/assets/Ferris.jpg";
import "@/assets/Airplane.jpg";
import "@/assets/Taken.jpg";
import "@/assets/TheMatrix.jpg";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
