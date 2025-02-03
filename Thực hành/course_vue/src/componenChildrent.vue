<script setup>

const {count} = defineProps({
    count: {
        type: Number,
        default: -1
    }
});
//
const emit = defineEmits(["increase"])
const callbackIncrease = () => emit("increase", 5);

const [email, modifier] = defineModel("email", {
    type: String,
    set(value) {
        if (modifier.capitolize) {
            value = value[0].toUpperCase() + value.substring(1)
        }
        return value;
    }
});
console.log(modifier) // {capitolize: true}
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
    <slot>dev test slot</slot>
    <slot name="button">button</slot>
</template>
