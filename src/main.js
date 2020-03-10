import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import("./scss/main.scss");

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHatWizard,
  faWrench,
  faPaintBrush
} from "@fortawesome/free-solid-svg-icons";

Object.values({
  faHatWizard,
  faWrench,
  faPaintBrush
}).forEach(icon => library.add(icon));

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
