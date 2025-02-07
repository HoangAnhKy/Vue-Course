
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  { path: "/", component: () => import("@/View/Home.vue")},
  { path: "/contact", component: () => import("@/View/Contact.vue")},
]


export const route = createRouter({
  history: createWebHistory(),
  routes
})