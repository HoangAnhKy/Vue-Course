# Props

Dùng để truyền biến vào component, và những đối tượng component được truyền thì sẽ không thể thay thế giá trị mặc định của thằng cha

# cách dùng

B1: Truyền biến vào từ component cha

```vue
<HelloWorld message="hi" />
```

B2: Nhận biến

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

# Truyền event qua props

- Sử dụng `defineEmits` bên `childrent` con để nhận dữ liệu bên `parent` khai báo.
- Khi muốn thực thi chỉ cần dùng thêm `@click="$emit('event', 'tham số nếu function cha có theo thứ tự trong function')"` hoặc gọi `callbackEmit` đã được define trong `defineEmits` là được
- với event tryền bên cha tới con thì nên khai báo `@tên_event`

Ví dụ:

```vue
// Parent
<script setup>
import Childrent from "@/componenChildrent.vue";
import { ref } from "vue";

const count = ref(0);
const handleBtn = () => {
  count.value++;
};
</script>

<template>
  <h1>Props</h1>
  <Childrent @increase="handleBtn" :count="count" />
</template>
```

```vue
// componentChildrent
<script setup>
const { count } = defineProps({
  count: {
    type: Number,
    default: -1,
  },
});

const emit = defineEmits(["increase"]);
const callbackIncrease = () => emit("increase"); // c2
// const callbackIncrease = () => emit("increase", 5);
</script>

<template>
  <h1>Component childrent</h1>
  <h1 @click="$emit('increase')">count: {{ count }}</h1>
  // c1
  <h1 @click="callbackIncrease">count: {{ count }}</h1>
  // c2
</template>
```

# v-model component

- Dùng modal như bình thường nhưng chỉ cần thêm `defineModel` ở phần tử nhận dữ liệu.
- Dùng `modifier customer`, ngoài các `modifier` cơ bản như là lazy, trim, number chúng ta có thể define thêm như sau:
  - `v-model:key.modifier`: v-model:email.capitolize, nó sẽ biến `defineModel` thành mảng ` [ref, modifier]`
  - muốn chỉnh gì đó ta chỉ việc chỉnh theo `object` `set(value)` của nó.
          ```js
          const [email, modifier] = defineModel("email", {
              type: String,
              set(value) {
              if (modifier.capitolize) {
                  value = value[0].toUpperCase() + value.substring(1)
              }
              return value;
              }
          });
          ```
    ví dụ

```vue
// parent
<script setup>
import Childrent from "@/componenChildrent.vue";
import { ref } from "vue";

const email = ref("");
const change = () => (email.value = "change");
</script>

<template>
  <h1>Props</h1>
  <Childrent v-model="email" />
  <button @click="change">changeEmail parent</button>
</template>
```

```vue
// componentChildrent
<script setup>
const email = defineModel("email"); // đối vơí trường hợp có một thì không cần đặt tên trong model cũng được
</script>

<template>
  <form>
    <div>
      <label>Email: {{ email }} </label><br />
      <input v-model:email="email" />
    </div>
  </form>
</template>
```
