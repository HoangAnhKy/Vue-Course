<template>
  <div class="container text-center mt-5">
    <h1 class="display-1 fw-bold text-danger">404</h1>
    <h2 class="mb-3">Oops! Trang không tồn tại</h2>
    <p class="text-muted">Có vẻ như bạn đã nhập sai đường dẫn hoặc trang này không còn tồn tại.</p>

    <!-- Hình minh họa -->
    <img src="https://i.imgur.com/qIufhof.png" class="img-fluid" alt="404 Illustration" width="400" />

    <!-- Nút quay về trang chủ -->
    <div class="mt-4">
      <RouterLink to="/" class="btn btn-primary btn-lg">
        ⬅ Quay về trang chủ
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>
