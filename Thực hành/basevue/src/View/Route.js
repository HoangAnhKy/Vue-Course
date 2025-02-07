
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  { path: "/", component: () => import("@/View/Home.vue")},
  {
    path: "/contact/:id?", name:"contact", props: true,
    component: () => import("@/View/Contact.vue")},
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/View/Notfound.vue")
  }
]


export const route = createRouter({
  history: createWebHistory(),
  routes,
  // Đổi tên class mặc định
  linkActiveClass: 'active',        // Thay cho router-link-active
  linkExactActiveClass: 'nav-link-exact'     // Thay cho router-link-exact-active (nếu muốn)
})