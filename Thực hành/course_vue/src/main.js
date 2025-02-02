import { createApp } from 'vue'
// import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import WatchDemo from "@/WatchDemo.vue";
// import Refs from "@/Refs.vue";
import Props from "@/Props.vue";

const app = createApp(Props)
app.mount('#app')
