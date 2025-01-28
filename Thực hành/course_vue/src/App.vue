<script setup>
import {ref, computed} from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')
const isActive = ref(false)
const styleState = ref({
    background: "red",
    color: "white",
    padding: "20px"
})

const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})

const setName = () => {
    fullName.value = "kdev dzai"
}

const changeActive = () => {
    isActive.value = !isActive.value
}
</script>

<template>

    <div>
        <!-- bài set và get computed -->
        <h1>{{ fullName }}: {{ firstName }} - {{ lastName }}</h1>

        <button @click="setName">change set Computed</button>
    </div>

    <div>
        <h1>Bind Class</h1>
        <button :class="['button', {active: isActive}]" @click="changeActive">active</button>

        <h3>bind style</h3>
        <button :style="styleState">active</button>
    </div>

    <h1 v-show="isActive">show</h1>
</template>

<style>
.button{
    background: red;
    color: white;
    border: none;
    padding: 10px 20px;
    &:hover{
        background: rgba(255, 0, 0, 0.73);
    }
}

.active {
    background: green;
    &:hover{
        background: lightgreen;
    }
}
</style>
