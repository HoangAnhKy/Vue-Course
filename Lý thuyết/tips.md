# Lấy token và thêm trực tiếp luôn ko phải đợi reload lại trang mới có

```js
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const token = getCookie('sys_token');
request.interceptors.request.use((config) => {
    const token = getCookie('sys_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});
```

# Lưu cookie bên BE 

```php
    // Lưu
    $token = $response->json()["access_token"];
    $expires_in = $response->json()["expires_in"];

    return response()->json([
        'success' => true,
        'statusCode' => 201,
        'message' => 'User has been registered successfully.',
        'data' => $users,
    ], 201)
    ->cookie("sys_token", $token, $expires_in, '/', env("APP_DOMAIN"), false, false);
    // Xóa cookie
    $request->user()->tokens()->delete();
    $cookie = Cookie::forget('sys_token');
    return response()->json([
        'success' => true,
        'statusCode' => 200,
        'message' => 'User has been logged out successfully.',
        'data' => null,
    ])
    ->cookie("sys_token", '', -1, '/', env("APP_DOMAIN"), false, false)
    ->withCookie($cookie);
```

# khai báo jquery trong vue
```js
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="{{ asset("vue-3.js") }}"></script>
// phải khai báo jquery trước vue
<script>
    const app = Vue.createApp({

    })
    app.config.globalProperties.$jquery = $;
    app.mount("#root");
</script>
```

# dùng props của lớp con

khai báo thêm `ref` ở `component` 

# v-cloak

Khi Vue khởi động:
- Vue render xong thì tự động gỡ bỏ v-cloak khỏi element.
- Khi đó, nội dung hiển thị ra như bình thường.

Ví dụ:

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>

<div id="app" v-cloak>
  {{ message }}
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Vue đã load xong!'
    }
  });
</script>

```
