import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {path:"/", name: "Film", component: () => import("@/View/Films.vue")},
  {path:"/film/:Title?", name: "FilmDetail", component: () => import("@/components/FilmDetail.vue")},
  {path: "/:pathMatch(.*)*", name: "404", component: () => import("@/View/404.vue")}
]


const route = createRouter({
  history: createWebHistory(),
  routes
})

export default route;
