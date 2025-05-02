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