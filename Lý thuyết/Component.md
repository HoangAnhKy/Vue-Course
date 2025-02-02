# khởi tạo component

```vue
<template>
    <!-- html -->
</template>

<script>
  export default {
    name: 'component_name',
    props: {
      msg: String //  giống (props) trong reactjs
    }
  }
</script>
<!--giới hạn css chỉ hoạt dộng ở đây-->
<style scoped>

</style>
```

# Đăng ký component ở toàn cầu

cú pháp: lưu ý  chỉ dùng được ở trong file main vì nó có `createApp` của vue
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

# ref với DOM trong template
Cách dùng giống useRef của reactjs, nói đúng thơn giống e trong `function(e)` khi gán vào sự kiện vậy

nếu đang dùng setup thì sẽ không dùng được

ví dụ:

```vue
<template>
  <!-- ref -->
  <input ref="name"/> 
  <button @click="handleClick"> click</button>
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
