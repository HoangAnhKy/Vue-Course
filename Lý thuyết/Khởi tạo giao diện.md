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

# computed properties
- Giống `getAttribute` trong laravel
- Computed property chỉ tính toán lại khi dữ liệu phụ thuộc của nó thay đổi, giúp tối ưu hiệu suất.
- Computed property tự động theo dõi các thay đổi trong các thuộc tính mà nó phụ thuộc. Nên là phải khai báo nó trước

```vue
<div id="app">
  <p>Full Name: {{ fullName }}</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
app.mount('#app');
</script>

```
