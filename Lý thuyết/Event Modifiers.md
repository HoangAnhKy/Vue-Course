# Event Modifiers

Dùng để kiểm soát hành vi mặc định của sự kiện


- `.stop` - Dừng sự kiện, không cho nó nổi lên sự kiện bên trên nếu có

    ```vue
    <!--  code sẽ chỉ chạy childClick vì không được chạy ra ngoài  -->
    <template>
        <div @click="parentClick">
            <button @click.stop="childClick">Click Me</button>
        </div>
    </template>
    
    <script setp>
        function parentClick() { console.log("Parent clicked");}
        function childClick() { console.log("Button clicked");}
    </script>
    ```
- `.prevent` - Ngăn chặn hành vi mặc định của trình duyệt.
    ```vue
    <template>
      <form @submit.prevent="handleSubmit">
        <button type="submit">Submit</button>
      </form>
    </template>
    <script>
      export default {
        methods: {
          handleSubmit() {
            console.log("Form submitted but no page refresh!");
          },
        },
      };
    </script>
    ```
- `.capture` - Sự kiện đi từ document xuống đến phần tử đích (từ ngoài vào trong).
    ```vue
    <template>
      <div @click.capture="parentClick"> <!-- chạy trước cho tới khi thấy phần tử được nhấn mới dừng-->
        <button @click="childClick">Click Me</button>
      </div>
    </template>
    
    ```
- `.self` - Chỉ kích hoạt sự kiện nếu chính phần tử đó bị click.

    ```vue
    <template>
      <div @click.self="handleClick">
        Click inside this box
        <button>Click me</button>
      </div>
    </template>
    
    <script>
    export default {
      methods: {
        handleClick() {
          console.log("Div clicked");
        },
      },
    };
    </script>
    ```
- `.once` - Sự kiện chỉ được kích hoạt một lần.
    ```vue
    <template>
      <button @click.once="handleClick">Click me once</button>
    </template>
    
    <script>
    export default {
      methods: {
        handleClick() {
          console.log("Button clicked, but only once!");
        },
      },
    };
    </script>
    ```