# Menu

- [click](#click)
- [if-else](#if---else)
- [for](#for)
- [html-raw](#html-thuần)
- [attribute binding](#attribute-binding)
- [mouse](#sự-kiện-chuột)
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

## HTML thuần

Sử dụng html thuần

```vue
<script setup>
  const html_raw = "<h2>HTML Row</h2>";
</script>

<template>
  <span v-html="html_raw"></span>
</template>
```
***

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

***

## Sự kiện chuột

Có 6 sực kiện:

- `mousemove`:
  - Thực hiện: Kích hoạt liên tục khi chuột di chuyển qua phần tử.
  - Ứng dụng: Theo dõi vị trí chuột hoặc tạo hiệu ứng hoạt họa dựa trên tọa độ chuột
- `mouseout` và `mouseleave` : 
  - Thực hiện: Khi chuột rời khỏi phần tử hiện tại.
  - Ứng dụng: Dùng khi muốn xử lý việc rời chuột khỏi một vùng lớn
  - Điểm khác nhau của `out` và `leave`:
    + `mouseout`: kích hoạt khi rời khỏi phần tử hoặc đi vào phần tử con.
    + `mouseleave`: Không kích hoạt lại nếu chuột rời khỏi phần tử con, chỉ kích hoạt một lần khi rời phần tử cha.
- `mouseover` và `mouseenter`:
  - Thực hiện: Chuột đi vào phần tử
  - Ứng dụng: Dùng khi muốn xử lý việc di chuột vào một vùng lớn
  - Điểm khác nhau của `over` và `enter`:
    + `mouseover`: Kích hoạt lại khi chuột đi vào các phần tử con.
    + `mouseleave`: Không kích hoạt lại khi chuột di vào phần tử con.

Ví dụ:
```vue
<!-- ex2: mouse -->
    <div class="box" v-on:mouseover="handleEvent('over')">
        <div style="border: 1px solid red; margin-top: 10px;">Child</div>
    </div>
    <div class="box" v-on:mouseenter="handleEvent('enter')">
        <div style="border: 1px solid red; margin-top: 10px;">Child</div>
    </div>

    <div class="box" v-on:mouseout="handleEvent('out')">out</div>
    <div class="box" v-on:mouseleave="handleEvent('leave')">leave</div>

    <div class="box" v-on:mousedown="handleEvent('down')">down</div>
    <div class="box" v-on:mouseup="handleEvent('up')">up</div>

    <div class="box" v-on:mousemove="handleEvent('move')" >
      Di chuyển chuột ở đây!
      <p>X: {{ x }}, Y: {{ y }}</p>
    </div>
```
***

## attribute binding

Các attribute của html không dùng được các biến định sẵn bên vue nên phải dùng bind.

Có 2 cách dùng: 
 - `v-bind`: `<a v-bind:href="url">vue</a>`
 - `:attribute`: `<a :href="url">vue</a>`

ví dụ dùng `v-bind` làm dynamic class

```html
  <a v-bind:href="url" :class="{active: isActive}">vue</a>
<!-- nếu code bên vue isActive là true nó sẽ hiện class không nó sẽ hiện class rỗng -->
<!--
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

nếu đem obj này đi binding <div v-bind="objectOfAttrs"></div> thì div này sẽ có tất cả thuộc tính trong obj

hoặc dùng với attribute động
<a :[attributeName]="url"> ... </a>
-->
```