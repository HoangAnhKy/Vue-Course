<template>
    <div class="container mt-2">
        <h1>ToDo List</h1>
        <div class="mt-3 input-group w-25">
            <input class="form-control" ref="nameTodo" value="" :data-index="edit"/>
                <button class="btn btn-success" @click="handleAction">{{edit ? "save" : "create"}}</button>
        </div>
        <table class="table table-striped mt-5">
            <colgroup>
                <col style="width: 25%">
            </colgroup>
            <tr>
                <th>Name ToDo</th>
                <th></th>
            </tr>
            <tr v-for="(todo, index) in listToDo" :key="index">
                <td>{{ todo }}</td>
                <td>
                    <button @click="getIdEdit(index)">Edit</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script setup>

import {computed, ref} from "vue";

const nameTodo = ref(null);
const edit = ref(null);
const listToDo = ref(["laravel", "Reactjs", "Livewire"]);

const resetForm = () => {
    const element = nameTodo.value;
    edit.value = null;
    element.value = null;
    element.focus()
}

const saveListToDo = () => {
    const element = nameTodo.value;
    listToDo.value.push(element.value)
    resetForm();
}
const getIdEdit = (index) =>{
    nameTodo.value.value = listToDo.value[index];
    edit.value = index
}
const editTodo = () => {
    listToDo.value[edit.value] = nameTodo.value.value
    resetForm();
}

const handleAction = computed(() => {
    return edit.value !== null ? editTodo() : saveListToDo();
})
</script>
