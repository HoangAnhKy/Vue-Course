<script setup>
import {computed, ref} from "vue";
    const count = ref(0)

    function increase() {
        count.value++;
    }

    const checkNumber = computed( () =>  {
        console.log("cache")
        return count.value <= 2 ? "count <= 2" : "count > 2"
    })
</script>

<template>
    <h1 ref="elementRef">{{ count }}</h1>
    <h1>{{ checkNumber }}</h1>
    <h3></h3>

    <button @click="increase">+ </button>
</template>
