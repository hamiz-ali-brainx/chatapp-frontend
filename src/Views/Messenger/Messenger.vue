<template>

  <div class="shadow p-3 mb-5 bg-body rounded messenger d-flex">
    <div class="bg-primary col-2 p-2 rounded shadow">
      <div class="header-box pt-3 pb-4">
        <div class="input-group">
          <search-select name="select_box" class="w-100 bg-white rounded" label="friends" :options=books>

          </search-select>

        </div>

        <div class="mt-4 bg-white rounded text-primary p-1 shadow ">
          <h1 class="fs-4 mt-2 ">
          <span class=" fw-bold text-primary m-2">
                Chats
          <font-awesome-icon icon="plus" class="float-end px-2"/>
          </span>
          </h1>
        </div>
      </div>

      <ul class="list-unstyled  p-2 bg-white conversations w-100  rounded ">
        <li class="mt-1" v-for="friend in getFriends">
          <router-link :to="{ name: 'Conversation',
          params: {
            id: friend.id,
            name: friend.name,
          }}" class=" text-decoration-none px-2 py-2 d-block fw-bold">
            <span
                class="  rounded-pill text-white p-2 me-2">
            02</span>
            {{ friend.name }}
          </router-link>
        </li>
        <li class="mt-1" v-for="group in getGroups">
          <router-link :to="{ name: 'Conversation',
          params: {
            id: group.id,
            name: group.name,
            isGroup: 'true'
          }}" class=" text-decoration-none px-2 py-2 d-block fw-bold">
            <span
                class="  rounded-pill text-white p-2 me-2">
            02</span>
            {{ group.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script setup>
import {ref, computed, onMounted} from "vue";

import {useStore} from "vuex";


const store = useStore();
const getFriends = computed(() => {
  return store.state.friends.friends
})
const getGroups = computed(() => {
  return store.state.groups.groups
})

onMounted(async () => {
  await store.dispatch('friends/getAllFriends');
  await store.dispatch('groups/getGroups');
})

const books = computed(() => {
  return [
    {title: "Old Man's War"},
    {title: "The Lock Artist"},
    {title: "HTML5"},
    {title: "Right Ho Jeeves"},
    {title: "The Code of the Wooster"},
    {title: "Thank You Jeeves"}
  ]
});

</script>

<style scoped>
li a:hover,
li a.router-link-active,
li a.router-link-exact-active {
  background-color: #0d6efd;
  color: white;
  padding: 0;
  min-width: 200px;
  border-radius: 10px;
}

li a {
  color: #0d6efd;
}

li {
  width: 100%;
}

li span {
  background: #0d6efd;
}
</style>