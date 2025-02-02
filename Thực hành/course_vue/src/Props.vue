<script setup>
import Childrent from "@/componenChildrent.vue"
import {ref} from "vue";

const count = ref(0)
const handleBtn = () => {
    count.value++;
}

const email = ref("");
const change = () => email.value = "change"

</script>

<template>
    <h1>Props</h1>
    <Childrent @increase="handleBtn" :count="count" v-model:email="email"/>
    <button @click="change">changeEmail parent</button>
</template>
