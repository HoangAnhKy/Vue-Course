<script setup>
import {ref} from "vue";

const { count } = defineProps({
    count: {
        type: Number,
        default: -1
    }
});
//
const emit = defineEmits(["increase"])
const callbackIncrease = () => emit("increase");

const email = defineModel("email");
</script>

<template>
    <h1>Component childrent</h1>
    <button @click="callbackIncrease">count: {{ count }}</button>

    <h3>bind Component v-model</h3>
    <form>
        <div>
            <label>Email: {{email}} </label><br />
            <input v-model="email">
        </div>
    </form>
</template>
