<script setup>
import { nextTick, ref } from "vue";

let bind_A = ref("mặc");
let bind_B = ref("định");

const changeA = (e) => {
    bind_A = e.target.value
    console.log(e.target.value)
};
</script>

<template>
    <label>{{ bind_A }}</label> <br />
    <label>{{ bind_B }}</label>

    <input v-model="bind_B">

    <input @change="changeA">
</template>
