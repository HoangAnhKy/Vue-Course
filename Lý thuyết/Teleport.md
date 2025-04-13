`Teleport` là một tính năng của Vue 3 cho phép di chuyển nội dung (DOM) của một component đến một vị trí khác trong cây DOM, bên ngoài component cha hiện tại.

`Dùng để làm gì?`
Teleport thường được sử dụng trong các trường hợp mà nội dung cần thoát khỏi cấu trúc DOM hiện tại để tránh bị ảnh hưởng bởi layout, CSS như:

- ✅ Modal (hộp thoại)
- ✅ Tooltip
- ✅ Dropdown
- ✅ Toast / Notification
- ✅ Context Menu

# cú pháp và mô tả
- `to`: là selector CSS chỉ định nơi bạn muốn teleport đến `(#id, .class, body, v.v.)
`
- Nội dung bên trong <teleport> sẽ được "dịch chuyển" đến vị trí tương ứng trong DOM

    ```vue
    <teleport to="selector">
    <!-- Nội dung sẽ được dịch chuyển tới selector -->
    </teleport>
    ```
# ví dụ thực tế  nếu nhấn vô mở modal nó sẽ teleport lên body, khi đóng nó sẽ xóa

```vue
<template>
  <div>
    <h1>Vue Teleport Example</h1>
    
    <!-- Nút để mở modal -->
    <button @click="showModal = true">Mở Modal</button>

    <!-- Teleport Modal -->
    <teleport to="body">
      <div v-if="showModal">
        <h2>Đây là Modal</h2>
        <p>Modal này sử dụng Vue Teleport</p>
        <button @click="showModal = false">Đóng</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>
```