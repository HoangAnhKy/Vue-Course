<template>
  <h1>Contact {{ $route.params}}</h1>
  <button @click="$router.back()">back</button>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

if (route.params.id == 2){
  router.push({name:"contact"})
}
</script>