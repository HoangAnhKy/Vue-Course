Lấy token và thêm trực tiếp luôn ko phải đợi reload lại trang mới có

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

Lưu cookie bên BE 

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