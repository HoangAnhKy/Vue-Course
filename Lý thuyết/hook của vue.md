# Composition API

- [ref](#ref)
- [reactive](#reactive)
- [nexttick](#nexttick)
***
# ref

Mục đích: Dùng khi muốn tạo một biến đơn giản để lưu trữ dữ liệu trạng thái và muốn Vue tự động cập nhật giao diện khi biến này thay đổi

Khá là giống `useState` trong reactjs trong cách lưu và thay đổi dữ liệu. Khác cách khai báo thôi

### Cách dùng

```vue
<template>
  <div>{{ count }}</div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    // phải khởi tạo trong setup
    setup() {
      const count = ref(0)

      // export nó cho template dùng
      return {
        count
      }
    }
  }
</script>
```

hoặc dùng thẳng như này thay vì exort default thì nó gán vô luôn

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

### Ví dụ dùng nâng cao

khai báo một hook tự dựng

```js
// useCounter.js
import { ref } from 'vue';

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
import { useCounter } from './useCounter';

export default {
  setup() {
    const { count, increment, decrement } = useCounter();
    return { count, increment, decrement };
  }
};
</script>
```

***

# reactive

Khi trong `ref` là một object hoặc array thì nên dùng `reactive`,để bỏ bớt `.value`

```vue
<script setup>
    import { reactive} from "vue";
    const kha = reactive({
        age: 24,
        money: [10]
    })


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

    <button @click="newYear">New Year </button>
</template>

```

*** 

# nextTick

Dùng để đồng bộ dom ngay sau khi xử lý 

```vue
<script setup>
    import {ref, reactive, nextTick} from "vue";
    const count = ref(0)
    const elementRef = ref(null)

    async function increase() {
        count.value++;
        console.log(elementRef.value.innerText) // in trước khi xử lý 0 cho lần đầu và + dần lên
        await nextTick()
        console.log(elementRef.value.innerText)  // in sau khi xử lý 1 cho lần đầu và + dần lên
    }
</script>

<template>
    <h1 ref="elementRef">{{ count }}</h1>

    <button @click="increase">+ </button>
</template>

```