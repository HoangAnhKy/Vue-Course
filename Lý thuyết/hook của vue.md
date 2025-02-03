## Composition API

**Ref**

- [ref](#ref)
- [reactive](#reactive)
- [nexttick](#nexttick)

**onMounted và onUnmounted**

---

## ref

Mục đích: Dùng khi muốn tạo một biến đơn giản để lưu trữ dữ liệu trạng thái và muốn Vue tự động cập nhật giao diện khi biến này thay đổi

Khá là giống `useState` trong reactjs trong cách lưu và thay đổi dữ liệu. Khác cách khai báo thôi

nếu `ref` dùng trong `attribute` thì nó sẽ hoạt động với `DOM`

### Cách dùng

```vue
<template>
  <div>{{ count }}</div>
</template>

<script>
import { ref } from "vue";

export default {
  // phải khởi tạo trong setup
  setup() {
    const count = ref(0);

    // export nó cho template dùng
    return {
      count,
    };
  },
};
</script>
```

hoặc dùng thẳng như này thay vì exort default thì nó gán vô luôn

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

### Ví dụ dùng nâng cao Composables

khai báo một hook tự dựng

```js
// useCounter.js
import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
}
```

Gọi lại và dùng, giúp code đẹp hơn và có thể tái sử dụng

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { useCounter } from "./useCounter";

export default {
  setup() {
    const { count, increment, decrement } = useCounter();
    return { count, increment, decrement };
  },
};
</script>
```

#### Dùng với v-for

```vue
<script setup>
import { onMounted, ref } from "vue";

const listRef = ref(["laravel", "reactjs", "vue", "livewire"]);
const listRefChildren = ref([]);

onMounted(() => {
  console.log(listRefChildren.value);
});
</script>

<template>
  <div class="container">
    <h1>refs</h1>
    <hr />

    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
      <tr v-for="(value, index) in listRef" :key="index" ref="listRefChildren">
        <td>{{ value }}</td>
        <td>
          <button class="btn btn-primary">edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>
```

---

## reactive

Khi trong `ref` là một object hoặc array thì nên dùng `reactive`,để bỏ bớt `.value`

```vue
<script setup>
import { reactive } from "vue";
const kha = reactive({
  age: 24,
  money: [10],
});

function newYear() {
  /*
         nếu dùng ref
        kha.value.money.push(10);
        kha.value.age++; 
        */
  kha.money.push(10);
  kha.age++;
}
</script>

<template>
  <h1>{{ kha.age }}</h1>
  <h1>{{ kha.money }}</h1>

  <button @click="newYear">New Year</button>
</template>
```

---

## nextTick

Dùng để đồng bộ dom ngay sau khi xử lý

```vue
<script setup>
import { ref, reactive, nextTick } from "vue";
const count = ref(0);
const elementRef = ref(null);

async function increase() {
  count.value++;
  console.log(elementRef.value.innerText); // in trước khi xử lý 0 cho lần đầu và + dần lên
  await nextTick();
  console.log(elementRef.value.innerText); // in sau khi xử lý 1 cho lần đầu và + dần lên
}
</script>

<template>
  <h1 ref="elementRef">{{ count }}</h1>

  <button @click="increase">+</button>
</template>
```

# `onMounted` và `onUnmounted`

dùng giống với `mounted` và `beforeUnmount` trong `Options API`

## `onMounted`

**Cách dùng**

- Được dùng ngay sau khi component đã được mount.
- Thích hợp để thực hiện các thao tác khởi tạo, gọi API, hoặc tương tác với DOM khi đã sẵn sàng.

## `onUnmounted`

**Cách dùng**

- Được dùng ngay trước khi component bị gỡ bỏ
- Thường dùng để dọn dẹp (clean up) các subscription, event listener, hoặc hủy (abort) yêu cầu HTTP đang chờ, v.v.

# `onBeforeMount` và `onBeforeUnmount`

- `onBeforeMount`: Dùng để chạy trước khi dữ liệu được `onMounted` vào
- `onBeforeUnmount`: Dùng để chạy trước khi dữ liệu bị `onUnmounted` ra

# `onUpdated` và `onBeforeUpdate`

- `onBeforeUpdate`: Được gọi trước khi component (hoặc Virtual DOM) thực hiện cập nhật (re-render) do có thay đổi về dữ liệu (state, props, computed, v.v.).
- `onUpdated`: Được gọi sau khi component hoàn tất cập nhật lại DOM (re-render).
