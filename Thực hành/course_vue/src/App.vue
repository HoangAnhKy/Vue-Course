<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

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
</script>

<template>
    <h1>{{ fullName }}: {{firstName}} - {{lastName}}</h1>

    <button @click="setName">change name</button>
</template>
