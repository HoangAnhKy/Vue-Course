<script setup>
import Childrent from "@/componenChildrent.vue"
import {ref} from "vue";

const count = ref(0)
const handleBtn = (key) => {
    count.value += key ?? 1;
}

const email = ref("");
const change = () => email.value = "change"

</script>

<template>
    <h1>Props</h1>
    <Childrent
        :count="count"
        @increase="handleBtn"
        v-model:email.capitolize ="email">
        slot parent
        <template v-slot:button>
            <button @click="change">changeEmail parent</button>
        </template>
    </Childrent>
    <!--Childrent
        Props
        event
        model:key.modifier
    -->
</template>
