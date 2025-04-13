Dùng để chuyển dữ liệu từ phần tử cha sang phần tử con mà không cần `props`

# cách dùng

sử dụng `provide` để khởi tạo dữ liệu mình cần ở phần tử cha và `inject` để
sử dụng biến đó ở bất kì phần tử con nào

Lưu ý:

- với `provide` thì có thể set thêm object để trả về nhiều, thì bên `inject` cũng phải nhận nhiều dữ liệu và theo type object

- có thể truyền biến và logic sử lý qua bên `inject`

- nếu bên `provide` sài `readonly` cho value thì sẽ không thể thay đổi dữ liệu bởi phần tử con

ví dụ:

```vue
<!--  parent -->
<script setup>
import { provide, ref } from "vue";

const location = ref("North Pole");

function updateLocation() {
  location.value = "South Pole";
}

provide("location", {
  location,
  updateLocation,
});
</script>
```

```vue
<!-- childrent -->
<script setup>
import { inject } from "vue";

const { location, updateLocation } = inject("location");
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

# khởi tạo golobal provide

sử dụng ở file `main.js`

```js
import { createApp } from "vue";

const app = createApp({});

app.provide(/* key */ "message", /* value */ "hello!");
```
