<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary w-100">
    <div class="container-fluid" >
      <div class="header-box px-2 pt-3 pb-4 m-1 d-flex">
        <button class="btn close-btn py-0 text-white sideBarButton" @click="sideBarToggle = !sideBarToggle">
          <font-awesome-icon size="2xl" icon="bars"/>
        </button>
        <h1 class="fs-4 mt-2">
          <span class="bg-white  rounded text-primary shadow px-2 fw-bold text-primary py-2 m-2">
                BrainX
          </span>
          <span class="text-white fw-bold">
            Chat App
          </span>
        </h1>
      </div>
      <div
          class="d-flex justify-content-between ">
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <font-awesome-icon icon="user" size="lg" class="text-white border-0"/>
      </button>
      <div class="collapse navbar-collapse float-end text-end nav-content justify-content-end"
           id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active text-white me-2 fw-bold fs-4" aria-current="page" href="#">Profile</a>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <button @click="logout" class="btn bg-white text-primary fw-bold" type="submit">Logout</button>
        </div>
      </div>
    </div>
  </nav>
  <div class="row container-fluid ps-0 container-side-bar">
    <transition name="slide-fade">
      <SideBar v-if="sideBarToggle || width > 991"/>
    </transition>
    <div class="content col-lg-10 col-10 col-md-10">
      <router-view></router-view>
    </div>
  </div>

</template>

<script setup>
import SideBar from "./SideBar.vue";
import {onMounted, ref} from 'vue';
import {RouterView} from "vue-router";

const sideBarToggle = ref(true);
const width = ref("");

function logout(e){
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
}
function getDimentions(e) {
  e.preventDefault();
  width.value = document.documentElement.clientWidth;
}

onMounted(
    () => window.addEventListener('resize', getDimentions)
)

</script>