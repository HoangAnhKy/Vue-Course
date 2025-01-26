# khởi tạo file

## Chưa có template

```html
<!-- html -->
<body>
  <div id="root"></div>
  <script src="./js/app.js"></script>
</body>
```

```js
// khởi tạo với createApp({ options})
const app = Vue.createApp({
  template: `<h1>Hello world</h1>`,
});

// gọi mount để render
app.mount("#root");
```

## có template nhưng muốn truyền biến gì đó

```html
<body>
  <div id="root">
    <h1>{{ message }}</h1>
    <!-- Truyền dữ liệu vào đây-->
  </div>

  <script src="./js/app.js"></script>
</body>
```

```js
const app = Vue.createApp({
  data() {
    return { message: "Hello Vue.js" };
  },
});

app.mount("#root");
```
