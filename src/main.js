import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/app.css";
import router from "./router";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./global-components/index.js"

const app = createApp(App).use(router).component('iconf', FontAwesomeIcon)

app.mount("#app");