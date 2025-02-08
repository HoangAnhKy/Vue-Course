<template>
  <div class="container mt-4">
    <div v-if="film" class="card shadow-lg border-0 rounded-4">
      <div class="row g-0">
        <!-- Hình ảnh Poster -->
        <div class="col-md-4">
          <img :src="film.Poster" class="img-fluid rounded-start" alt="Movie Poster" />
        </div>

        <!-- Thông tin chi tiết -->
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title"> {{ $route.params.Title}}</h2>
            <p class="text-muted"><b>📅 Năm:</b> {{ film.Year }} | <b>⏳ Thời lượng:</b> {{ film.Runtime }}</p>
            <p><b>🎭 Thể loại:</b> {{ film.Genre }}</p>
            <p><b>🎬 Đạo diễn:</b> {{ film.Director }}</p>
            <p><b>📝 Kịch bản:</b> {{ film.Writer }}</p>
            <p><b>🎭 Diễn viên:</b> {{ film.Actors }}</p>
            <p><b>🏆 Giải thưởng:</b> {{ film.Awards }}</p>
            <p><b>⭐ IMDb Rating:</b> {{ film.imdbRating }} ({{ film.imdbVotes }} votes)</p>
            <p class="mt-3"><b>📖 Nội dung:</b> {{ film.Plot }}</p>
          </div>
        </div>
      </div>
      <h3 class="mt-4">📷 Hình ảnh khác</h3>
      <div class="row row-cols-2 row-cols-md-3 g-3">
        <div v-for="(image, index) in film.Images" :key="index" class="col">
          <img :src="image" class="img-fluid rounded shadow-sm" alt="Movie Scene" />
        </div>
      </div>
      <div class="mt-4 text-center">
        <button @click="$router.back()" class="btn btn-secondary">⬅ Quay lại danh sách</button>
      </div>
    </div>
  </div>
</template>
<script setup>
  import {useRoute} from "vue-router";
  import {watchEffect, ref} from "vue";
  import axios from "axios";

  const route = useRoute();
  const film = ref([]);

  watchEffect(async () => {
    const {data} = await axios.get(`http://localhost:3000/films?Title=${route.params.Title}`);
    film.value = data[0] ?? null;
  })
</script>
