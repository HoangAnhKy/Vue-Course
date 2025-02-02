# Props

Dùng để truyền biến vào component, và những đối tượng component được truyền thì sẽ không thể thay thế giá trị mặc định của thằng cha

# cách dùng

B1: Truyền biến vào từ component cha

```vue
<HelloWorld message="hi"/>
```

B2: Nhận biến

- Nếu chỉ cần dùng bên view thôi
    ```vue
    <h1>{{ message }}</h1>
    ```
- Nếu muốn xử lý thêm bên giao diện rồi mới truyền xuống view

```vue
<script setup>
  const props = defineProps(["message"]); // Dùng mảng để lấy dữ liệu
  
  const propsSetType = defineProps({
    message: String, 
    multipleType: [String, Number] // gán nhiều type cho một props
    required: {
      required: true,
      type: String,
      default: "mac dinh",
      validate(value){
          
      }
    } // Thêm kiểu bắt buộc
  }); // Dùng object để set type giữ liệu
</script>
```

