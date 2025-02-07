
import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap và BootstrapVue 3 CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import {route} from "./View/Route.js";

createApp(App).use(route).mount('#app')
