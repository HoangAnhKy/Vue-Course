# Khái niệm
Pinia là thư viện quản lý state chính thức cho Vue 3

Thay vì phải truyền props hoặc emit, có thể  dùng Pinia để  thay thế
## Ưu điểm của Pinia
- Cực kỳ nhẹ, nhanh, và đơn giản
- Hỗ trợ tốt Composition API (ref, computed, watch)
- Hỗ trợ hot module reload (HMR)
- Tương thích với devtools Vue tốt
- Không cần boilerplate như Vuex (mutations/actions dài dòng)


# Lệnh cài đặt

```sh
npm install pinia
```

# Các phần chú ý

| Thành phần   | Dùng để làm gì?                                                                                     | Cách dùng                                                                                | Ví dụ                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 🔹 `state`    | Lưu trữ dữ liệu (giống `data()` trong Vue)                                                          | Được khai báo bằng hàm `state: () => ({})` hoặc `ref()` nếu dùng `setup()`               | `state: () => ({ count: 0, user: null })`                                                          |
| 🔹 `getters`  | Tính toán dữ liệu từ `state`, giống như `computed`                                                  | Dùng trong kiểu object hoặc dạng `setup()`, **không nên thay đổi giá trị trong getters** | `getters: { doubleCount: (state) => state.count * 2 }`                                             |
| 🔹 `actions`  | Hàm xử lý logic, gọi API, cập nhật `state`, có thể `async`                                          | Dùng để thay đổi `state` và gọi hàm khác trong store                                     | `actions: { increment() { this.count++ }, async fetchData() { const data = await fetch('...') } }` |
| 🔹 `setup()`  | Viết store theo kiểu Composition API, dùng `ref`, `computed`, `watch`,...                           | Dùng `defineStore(id, () => {...})` để viết theo cách composition                        | `const count = ref(0); const double = computed(() => count.value * 2); return { count, double }`   |
| 🔹 `persist`  | Lưu trữ dữ liệu xuống `localStorage` hoặc `sessionStorage` *(giúp giữ state sau khi refresh trang)* | Cần cài plugin `pinia-plugin-persistedstate`, sau đó thêm `persist: true` vào store      | `persist: { key: 'user', storage: localStorage }`                                                  |
| 🔹 `devtools` | Tự động được hỗ trợ – giúp debug `state`, `action`, v.v... thông qua Vue Devtools                   | Không cần cấu hình thêm, chỉ cần mở Chrome DevTools có Vue plugin là thấy Pinia          | 📷 *Hiển thị state, gọi action trực tiếp trong DevTools*                                            |

## State

Giống như data() của component. Mọi biến trong đây sẽ được reactive toàn app.

```js
state: () => ({
  isLoggedIn: false,
  cart: [],
})
```
## getters

Tính toán dữ liệu từ `state`, giống như `computed` 

```js
getters: {
  cartItemCount: (state) => state.cart.length,
  isAuthenticated: (state) => state.isLoggedIn,
}
```

## actions

Action có thể async, gọi API, xử lý logic, và cập nhật `state`.

```js
actions: {
  login() {
    this.isLoggedIn = true
  },
  addToCart(item) {
    this.cart.push(item)
  },
  async fetchCart() {
    const res = await fetch('/api/cart')
    const data = await res.json()
    this.cart = data
  }
}
```

## setup (kiểu)

Rất mạnh khi thích dùng Composition API. Có thể dùng watch, ref, reactive,… như trong component Vue bình thường.

```js
export const useUserStore = defineStore('user', () => {
  const name = ref('Guest')
  const upperName = computed(() => name.value.toUpperCase())

  function setName(newName) {
    name.value = newName
  }

  return { name, upperName, setName }
})
```

## persist 

Lưu state vào `localStorage`/`sessionStorage`. Nó sẽ tự động lưu toàn bộ state của store đó (toàn bộ state, không bao gồm getters hay actions) vào `localStorage` hoặc `sessionStorage`.



- **Yêu cầu plugin: pinia-plugin-persistedstate**

  ```sh
  npm install pinia-plugin-persistedstate
  ```

- gọi để  dùng trong `main.js`

  ```js
  // main.js
  import { createPinia } from 'pinia'
  import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
  ```

- gọi trong `store`

  ```js
  // Trong store
  persist: {
    key: 'auth',
    storage: sessionStorage,
  }
  ```

- demo


  ```js
  // 📁 stores/auth.js
  import { defineStore } from 'pinia'

  export const useAuthStore = defineStore('auth', {
    state: () => ({
      isLoggedIn: false,
      user: null,
    }),
    actions: {
      login(userData) {
        this.user = userData
        this.isLoggedIn = true
      },
      logout() {
        this.user = null
        this.isLoggedIn = false
      }
    },
    persist: {
      key: 'authData',
      storage: localStorage, // hoặc sessionStorage
    }
  })
  ```

# Cách dùng cơ bản

## Khai báo trong `main.js`

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia()) // khai báo
app.mount('#app')
```

## Tạo một store đơn giản có thể  tái sử  dụng

- Ví dụ tạo ở `src/stores/counter.js`

    ```js
    import { defineStore } from 'pinia'

    export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
        this.count++
        },
    },
    })
    ```

## Dùng trong component

```js
<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Tăng</button>
  </div>
</template>
```