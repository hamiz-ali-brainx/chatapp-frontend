import { createApp} from 'vue'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import './assets/main.css'
import store from "./store/store";
import {library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {fas, faUserSecret} from "@fortawesome/free-solid-svg-icons";

library.add(fas);
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.use(store);
app.mount('#app')
