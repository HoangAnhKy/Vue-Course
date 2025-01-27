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

# ref

Cách dùng giống useRef của reactjs, nói đúng thơn giống e trong `function(e)` khi gán vào sự kiện vậy

ví dụ:

```vue
<input ref="name">
```

trong js dùng thì

```js
this.$refs.name
```
