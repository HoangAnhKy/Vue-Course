# khởi tạo file

## Chưa có template

```html
<!-- html -->
<body>
  <div id="root"></div>
  <script src="./js/app.js"></script>
</body>
```

```js
// khởi tạo với createApp({ options})
const app = Vue.createApp({
  template: `<h1>Hello world</h1>`,
});

// gọi mount để render
app.mount("#root");
```

## có template nhưng muốn truyền biến gì đó

```html
<body>
  <div id="root">
    <h1>{{ message }}</h1>
    <!-- Truyền dữ liệu vào đây-->
  </div>

  <script src="./js/app.js"></script>
</body>
```

```js
const app = Vue.createApp({
  data() {
    return { message: "Hello Vue.js" };
  },
});

app.mount("#root");
```

# computed properties
- Giống `getAttribute` trong laravel
- Computed property chỉ tính toán lại khi dữ liệu phụ thuộc của nó thay đổi, giúp tối ưu hiệu suất.
- Computed property tự động theo dõi các thay đổi trong các thuộc tính mà nó phụ thuộc. Nên là phải khai báo nó trước

```vue
<div id="app">
  <p>Full Name: {{ fullName }}</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
app.mount('#app');
</script>

```

cách sử dụng thứ 2

```vue
<script setup>
  import {computed, ref} from "vue";
  const count = ref(0)

  function increase() {
    count.value++;
  }

  const checkNumber = computed( () =>  {
    console.log("cache") // loop liên tục nếu ko có computed
    return count.value <= 2 ? "count <= 2" : "count > 2"
  })
</script>

<template>
  <h1 ref="elementRef">{{ count }}</h1>
  <h1>{{ checkNumber }}</h1>
  <h3></h3>

  <button @click="increase">+ </button>
</template>

```

### ghi đè giá trị ở trong computed

*Dùng get, set thôi*

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})

const setName = () => {
    fullName.value = "kdev dzai"
}
</script>

<template>
    <h1>{{ fullName }}: {{firstName}} - {{lastName}}</h1>

    <button @click="setName">change name</button>
</template>

```

# Watch
`Watch` trong Vue (còn được gọi là “quan sát” các thay đổi dữ liệu) là một cơ chế cho phép thực thi một đoạn logic tùy chỉnh khi dữ liệu (hoặc giá trị tính toán) thay đổi.

## Cú pháp 

```js
import {watch} from 'vue'

watch(src, (newVal, oldVal) => (
// src chứa các giá trị thay đổi giống bên useEffect nhưng mà nó sẽ không bắt obj.value 
// chúng thay sẽ thay nó bằng getter (callback)
    
// trong callback này là một đoạn code logice gì đó sử dụng dữ liệu cũ và mới
))
```

Ví dụ
```vue
<script setup>
  import { ref, watch } from 'vue'

  const count = ref(0)

  // Theo dõi thay đổi của 'count'
  watch(count, (newVal, oldVal) => {
    console.log(`count thay đổi: ${oldVal} => ${newVal}`)
  })
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="count++">Tăng count</button>
  </div>
</template>
```

## Theo dõi sâu (deep và immediate)

- `deep`: để theo dõi toàn bộ thay đổi bên trong object. `watch(obj, callback, { deep: true })`, `false` chỉ dùng được ở lớp ngoài
- `immediate`: dùng để gọi `callback (newVal, oldVal) => {...}` ngay lập tức khi component mount

# watchEffect 

là một hàm (API) giúp dễ dàng tạo ra các side effect (tác vụ phụ) dựa trên các biến phản ứng (reactive data) mà không cần chỉ rõ biến nào để theo dõi. Vue sẽ tự động thu thập tất cả biến phản ứng để sử dụng trong hàm callback và chạy lại callback bất cứ khi nào những biến đó thay đổi

nó chỉ có `newValue` không có `old value`. Và nó chạy ngay khi component được mount
```vue
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)

    watchEffect(() => {
      // Bất cứ biến (ref/reactive) nào được sử dụng ở đây,
      // khi thay đổi thì hàm callback này sẽ tự động chạy lại.
      console.log(`Giá trị count là: ${count.value}`)
    })

    return { count }
  }
}

```