<template>
  <div class="d-flex gap-3 flex-wrap">
    <template v-for="(film, index) in listFilm" :key="index">
      <Film :film="film"/>
    </template>
  </div>
</template>
<script setup>
import {onMounted, ref, defineAsyncComponent } from "vue";
import axios from "axios";

const Film = defineAsyncComponent(() =>
  import("@/components/Film.vue")
);
const listFilm = ref([]);

onMounted(async () => {
  let {data} = await axios.get("http://localhost:3000/films");
  listFilm.value = data;
})
</script>
