<template>
  <div class="mx-2">
    <div class="card shadow-lg border-0 rounded-4" style="width: 350px;">
      <img :src="film.Poster" class="card-img-top rounded-top img-fluid" alt="Movie Poster" style="width: 350px; height: 500px; object-fit: cover"  />

      <div class="card-body">
        <h3 class="card-title text-center">{{ film.Title }}</h3>
        <p class="text-muted text-center"><b>Năm:</b> {{ film.Year }}</p>

        <p><b>🎭 Thể loại:</b> {{ film.Genre }}</p>
        <p><b>⏳ Thời lượng:</b> {{ film.Runtime }}</p>
        <p><b>🎬 Đạo diễn:</b> {{ film.Director }}</p>
      </div>

      <div class="card-footer text-center bg-white border-0">
        <RouterLink :to="{name:'FilmDetail', params:{'Title': film.Title}}" class="btn btn-primary">🎥 Xem ngay</RouterLink>
      </div>

    </div>
  </div>
</template>

<script setup>
const { film } = defineProps(["film"]);
</script>
