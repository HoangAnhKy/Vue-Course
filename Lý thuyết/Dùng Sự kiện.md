# Menuenu

- [click](#click)
- [if-else](#if---else)
- [for](#for)

---

## click

- Có 2 cách dùng

  - `v-on:click`
  - `@click`

  Nó chỉ có tác dụng khi ở trong thẻ div có id trùng với `.mount` trong code

- Có thể gán sự kiện thực thi trực tiếp cho nó trong `html` hoặc gán bên `js`

  - `html`: `@click="count--"` hoặc `v-on:click="count--"`
  - `js`: dùng hàm trong thẻ `methods`. Cách viết `@click="increment"` hoặc `v-on:click="increment"`

```html
<div id="root">
  {{ count }}
  <!-- v-on:click -->
  <button v-on:click="increment">increase</button>

  <!-- @click -->
  <button @click="count--">decrease</button>
</div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      // có thể truyền data vào, cách dùng gọi hàm truyền biến trên html là được
      this.count++;
    },
  },
});

app.mount("#root");
```

---

## if - else

Dùng để set điều kiện `v-if` và `v-else`, có cả `v-else-if`

```html
<div id="root">
  <div v-if="show">
    <!-- show khi nó true và ngược lại, biến show lấy bên data()-->
    {{ count }}
    <button v-on:click="count++">increase</button>
    <button @click="count--">decrease</button>
  </div>

  <button @click="show = !show">
    <!-- if -->
    <span v-if="!show">show</span>
    <!-- else -->
    <span v-else>hidden</span>
  </button>
</div>
```

có thể dùng javscript để checkcheck

```html
{{ ok ? 'YES' : 'NO' }}
```

---

## for

Cú pháp cơ bản

```html
<ul>
  <li v-for="(item, index) in fruits" :key="index">
    {{ index + 1 }} - {{ item }}
  </li>
</ul>

<script>
  const app = Vue.createApp({
    data() {
      return {
        fruits: ["Apple", "Banana", "Cherry"],
      };
    },
  });

  app.mount("#app");
</script>

<!--
out put
1 - Apple
2 - Banana
3 - Cherry
-->
```
