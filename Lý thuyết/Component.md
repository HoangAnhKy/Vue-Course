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
