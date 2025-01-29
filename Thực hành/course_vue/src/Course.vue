<script setup>
import { nextTick, ref } from "vue";

let bind_A = ref("mặc");
let bind_B = ref("định");
const checked = ref(false);

const refB = ref(null)

const chagneB = () => {
    nextTick()
    bind_B.value = refB.value.value
}
</script>

<template>
    <label>{{ bind_A }}</label> <br />
    <label>{{ bind_B }}</label>

    <input v-model.lazy="bind_A">
    <p>Checked: {{ checked}}</p>
    <input type="checkbox" v-model="checked" true-value="yes" false-value="no">
    <input ref="refB" @keyup="chagneB">
</template>
