<template>
  <slot name="title"></slot>
  <button @click="handleBtn" class="btn btn-success mb-3">{{ !showDivCreate ? "Show Form Create" : "Hidden Form Create"}}</button>
  <div class="w-25" v-show="showDivCreate">
    <input
        class="form-control mb-2"
        :value="user.name"
        @input="updateName($event.target.value)"
        placeholder="name user"
    >
    <input
        class="form-control mb-2"
        :value="user.birthday"
        @input="updateBirthday($event.target.value)"
        type="date"
    >
    <input
        class="form-control mb-2"
        :value="user.email"
        @input="updateEmail($event.target.value)"
        placeholder="email"
    >
    <button
        class="form-control btn btn-success"
        @click="handleEmitSave">ok
    </button>
  </div>

  <p>{{ checkEmptyList.label }}</p>

  <div class="w-25">
    <select class="form-select" v-model="optionName">
      <option value="">choose user</option>
      <template v-for="(user, index) in listUser.data" :key="index">
        <option :value="user['name']">{{ user["name"] }}</option>
      </template>
    </select>
  </div>

  <table class="table table-striped">
    <thead>
    <tr>
      <th>name</th>
      <th>birthday</th>
      <th>email</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(user, index) in checkEmptyList.data" :key="index">
      <!--      <tr v-if="optionName === '' || user['name'] === optionName">-->
      <tr>
        <td>{{ user["name"] }}</td>
        <td>{{ user["birthday"] }}</td>
        <td>{{ user["email"] }}</td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script setup>
import {computed, ref} from "vue";

const [user, modifies] = defineModel("user", {
  set(value) {
    if (value.name) {
      value.name = value.name[0].toUpperCase() + value.name.substring(1);
    }
    if (modifies.email) {
      value.email = value.name + "@gmail.com";
    }
    return value;
  }
});

const showDivCreate = ref(false)

const optionName = defineModel("optionName");
const {listUser} = defineProps(["listUser"]);
const emit = defineEmits(["postUser"]);

const updateName = (newName) => user.value = {...user.value, name: newName};
const updateBirthday = (newBirthday) => user.value = {...user.value, birthday: newBirthday};
const updateEmail = (newEmail) => user.value = {...user.value, email: newEmail};
const handleEmitSave = () => emit("postUser");
const handleBtn = () => showDivCreate.value = !showDivCreate.value;

const checkEmptyList = computed(() => {
  return {
    label: listUser.search.length === 0 ? "List Empty" : `list have ${listUser.search.length} records`,
    data: listUser.search
  };
})
</script>
