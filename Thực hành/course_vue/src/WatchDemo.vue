<template>
    <div class="container">
        <h1>Watch - WatchEffect</h1>
        <hr/>
        <div>
            <h3>watch ref</h3>
            <button class="btn btn-success p-2" @click="increase"> Watch: {{ count }}</button>
            <button class="btn btn-success p-2 mx-2" @click="increaseCount_not_watch"> unWatch:
                {{ count_not_watch }}
            </button>
        </div>
        <hr/>
        <div>
            <h3>Object sài reactive</h3>
            <button class="btn btn-primary" @click="bugIncrease"> {{ obj_dev.bug }}</button>
            <button class="btn btn-primary mx-2" @click="taskIncrease"> {{
                    obj_dev.tasks.t1
                }}
            </button>
        </div>
        <hr/>
        <div>
            <h1>Label: {{input}}</h1>
            <input v-model.lazy="input" />
        </div>
    </div>
</template>
<script setup>
import {reactive, ref, watch, watchEffect} from "vue";

const count = ref(0);
const count_not_watch = ref(0);
const input = ref("");

const obj_dev = reactive({
    bug: 0,
    tasks: {
        t1: 0
    }
})

const bugIncrease = () => obj_dev.bug++;
const taskIncrease = () => obj_dev.tasks.t1++;
const increase = () => count.value++;
const increaseCount_not_watch = () => count_not_watch.value++;

watch([count, count_not_watch, input], (newV, oldV) => {
    console.log(`change ${oldV} -> ${newV}`)
})

watch(obj_dev, (newV, oldV) => {
    console.log(`change obj: ` + JSON.stringify(obj_dev))
})

watchEffect(() => {
    console.log("watchEffect: " + JSON.stringify(obj_dev))
});
</script>
