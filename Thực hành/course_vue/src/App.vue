<script setup>
    import {ref, reactive, nextTick} from "vue";
    const count = ref(0)

    function increase() {
        count.value++;
        console.log(this.$refs.elementRef)
    }
</script>

<template>
    <h1 ref="elementRef">{{ count }}</h1>

    <button @click="increase">+ </button>
</template>
