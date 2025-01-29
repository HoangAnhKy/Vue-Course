import { createApp } from 'vue'
// import App from './App.vue'

import Course from "@/Course.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(Course)

app.mount('#app')
