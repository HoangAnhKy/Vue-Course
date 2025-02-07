<template>
  <textarea readonly class="disabled form-control mt-3" rows="7">
    kiến thức dùng trong này
    + Component: slot, name
    + computed
    + ref
    + watch
    + props: binding, method, v-model
    + axios
  </textarea>
  <ContentTodo
      v-model:user.cap.email="user"
      v-model:optionName="optionSearchName"
      @postUser="postUser"
      :listUser="listUser"
  >
    <template #title><h1>User</h1></template>
  </ContentTodo>

</template>

<script setup>

import ContentTodo from "@/components/ContentTodo.vue";
import {computed, reactive, ref, watch} from "vue";
import axios from "axios";

const user = ref({
  name: "",
  birthday: "",
  email: "",
})

const optionSearchName = ref("");

const listUser = ref({
  data: [],
  search: []
});
const reGet = ref(false);

const postUser = async () => {
  await axios.post("http://localhost:3000/users", user.value);
  reGet.value = !reGet.value
}

watch(reGet, async function () {
  const data = await axios.get("http://localhost:3000/users");
  listUser.value.data = data.data;
  listUser.value.search = data.data;
}, {immediate: true})

watch(optionSearchName, function () {
  const Regex = new RegExp(`${optionSearchName.value}`,"gm");
  listUser.value.search = listUser.value.data.filter((obj) => obj.name.match(Regex) !== null);
})
</script>