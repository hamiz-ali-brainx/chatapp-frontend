<template>

    <div class="sidebar bg-primary position-absolute" id="side_nav">
      <ul class="list-unstyled sidebar_link">
        <li class=""><router-link to="/messages"  class="px-4 text-decoration-none py-2 d-block" exact>  <font-awesome-icon icon="message" class="px-2"/>Messages
       </router-link></li>
        <li class=""><router-link to="/spam" class="px-4 text-decoration-none py-2 d-block" href="#"><font-awesome-icon icon="archive" class="px-2"/>Spam</router-link></li>
        <li class=""><router-link to="/requests" class="px-4 text-decoration-none py-2 d-block" href="#"><font-awesome-icon icon="user-plus" class="px-2"/>Requests</router-link></li>
        <li class=""><router-link to="/blocked" class="px-4 text-decoration-none py-2 d-block" href="#"><font-awesome-icon icon="user-slash" class="px-2"/>Blocked</router-link></li>
      </ul>
      <hr class="h-color">
      <ul class="list-unstyled  sidebar_link ">
        <li class="">
          <router-link to="/settings"  class="px-4 text-decoration-none py-2 d-block">
              <font-awesome-icon icon="gear" class="px-2"/>
              Settings
          </router-link>
        </li>
        <li class="">
          <router-link to="/notifications" class="px-4 text-decoration-none py-2 d-block">
            <font-awesome-icon icon="bell" class="px-2"/>
            Notifications
          </router-link>
        </li>

      </ul>
    </div>



</template>
<script setup>
import { RouterView } from "vue-router";

</script>

<style scoped>
ul {
  margin: 0;
}
li a:hover,
li a.router-link-active,
li a.router-link-exact-active {
  background-color: white;
  color: #0d6efd;
  width: 100%;
  cursor: pointer;
  min-width: 290px;
}
li a {
  color: white;
}
</style>