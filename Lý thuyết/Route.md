# cài đặt
```shell
npm install vue-router@4
```

# cách dùng
**B1: tạo component**

```vue
<!--ví dụ tạo 2 component-->
<template>
  <h1>Contact</h1>
</template>
<template>
  <h1>Home</h1>
</template>
```

**B2: khởi tạo route**

với: 
- `createWebHistory`: Tạo một “history mode” sử dụng HTML5 History API (URL đẹp, không có #).
- `createRouter`:  Khởi tạo một đối tượng router, định tuyến tuyến đường
- Sử dùng `lazyload` => `() => import("@/View/Home.vue")`
- nếu dùng `name` trong route thì bên `RouterLink` gọi sẽ là `<RouterLink :to={name:'tên', params:{tên params}}>`
- có thể truyền cả `props` và `defineProps` sài không khác gì `props trong component`: khai báo `props: true`
```js

import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: "/", component: () => import("@/View/Home.vue")},
    { path: "/contact/:id?", component: () => import("@/View/Contact.vue"), name: "contact", props: true},
    {
        path: "/:pathMatch(.*)*", // dùng phù hợp với mọi path, muốn quay lại thì $router.back() với view
        component: () => import("@/View/Notfound.vue")
    }
/*
truyền id nếu cần, phần tử trong component muốn truy cập thì dùng
nếu nó dùng ở template
    <h1>Contact {{ $route.params}}</h1>
còn ở script thì dùng 
    import {useRoute} from "vue-router";
    const route = useRoute(); // lấy được path,hash, query các kiểu nếu consolog nó ra xem
    CẨN THẬN useRoute với useRouter
*/
]

export const route = createRouter({
  history: createWebHistory(),
  routes,

    // Đổi tên class mặc định
    linkActiveClass: 'nav-link-active',        // Thay cho router-link-active
    linkExactActiveClass: 'nav-link-exact'     // Thay cho router-link-exact-active (nếu muốn)
})
```

**B3: khai báo route và sử dụng bên vue**

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import {route} from "./View/Route.js";

createApp(App).use(route).mount('#app')
```

**B4: Dùng `outlet`(`<RouterView />`) trong file cần ví dụ dùng ở `App.vue`**

```vue
<template>
  <RouterView />
</template>
```

# Khởi tạo nav
 sử dụng `RouterLink`
```vue
<template>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/contact">contact</RouterLink>
    </li>
  </ul>
</template>
<script setup>
</script>
```