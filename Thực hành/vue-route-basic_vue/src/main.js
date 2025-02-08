import { createApp } from 'vue'
import App from './App.vue'
import route from "@/Routes/config.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App).use(route).mount('#app')
