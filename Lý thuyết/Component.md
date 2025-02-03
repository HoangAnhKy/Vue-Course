# khởi tạo component

```vue
<template>
  <!-- html -->
</template>

<script>
export default {
  name: "component_name",
  props: {
    msg: String, //  giống (props) trong reactjs
  },
};
</script>
<!--giới hạn css chỉ hoạt dộng ở đây-->
<style scoped></style>
```

# Đăng ký component ở toàn cầu

cú pháp: lưu ý chỉ dùng được ở trong file main vì nó có `createApp` của vue

- Với một cái `app.component("name", "component");`
- Với nhiều cái `app.component("name", "component").component("name", "component")` cứ vậy cho đến hết component cần

ví dụ:

```js
<!--file main.js-->
import { createApp } from 'vue'
import Props from "@/Props.vue";
import WatchDemo from "@/WatchDemo.vue";

const app = createApp(Props)

app.component("WatchDemo", "WatchDemo");

app.mount('#app')

```

# Async Component

dùng `defineAsyncComponent` để import `Components`

```js
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() =>
  import("./components/MyComponent.vue")
);
```

### Các hàm hỗ trợ khác

```js
const AsyncComp = defineAsyncComponent({
  // dùng để import
  loader: () => import("./Component.vue"),
  // dùng dể loading một component trong trạng thái đang load
  loadingComponent: LoadingComponent,
  // dùng để hiện nó sau baon hiêu ms
  delay: 200,
  // dùng để bắt lỗi
  errorComponent: ErrorComponent,
  // nó sẽ hiện thị lỗi sau bao nhiêu ms, mặc định của nó là vô cực
  timeout: 3000,
});
```

# ref với DOM trong template

Cách dùng giống useRef của reactjs, nói đúng thơn giống e trong `function(e)` khi gán vào sự kiện vậy

nếu đang dùng setup thì sẽ không dùng được

ví dụ:

```vue
<template>
  <!-- ref -->
  <input ref="name" />
  <button @click="handleClick">click</button>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    handleClick()
    {
      <!-- ref -->
      console.log(this.$refs.name.value)
    }
  }
}
</script>
```

# slot

`slot` sẽ nhận giá trị ở trong `component` truyền bao nhiêu qua thì bên `slot` trong `thẻ con` nhận bấy nhiêu.

- nếu không để gì thì nó hiện trống hoặc hện giá trị default `<slot> default <slot>`
- Muốn truyền nhiều thằng khác nhau qua thì đặt tên thêm cho nó `<slot name="">` ở phần con và `<template #name>` ở phần cha

  ```vue
  // childrent
  <template>
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
  </template>

  // vue parent

  <template>
    <childrent>
      <template #slot1>slot1</template>
      <template #slot2>slot2</template>
    </childrent>
  </template>
  ```

ví dụ cơ bản:

```vue
// parent
<script setup>
import FancyButton from "./FancyButton.vue";
</script>

<template>
  <FancyButton> Click me </FancyButton>
</template>
```

```vue
// childrent
<template>
  <button class="fancy-btn">
    <slot />
  </button>
</template>
```
