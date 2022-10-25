<template>
  <div :class="[right? 'right-message':  'message',  right? 'align-right': '' ]">
    <h6 :class="[right? 'right-author':  'author']">{{props.author}}</h6>
    <pre class="text">{{text}}</pre>
    <font-awesome-icon  size="xs" icon="check"/>
    <span class="ps-2" :class="[right? 'right-read-receipt':  'read-receipt']">read at 10:20 pm</span>

  </div>
</template>
<script setup>

const props = defineProps({
   text: String,
   author: String,
   right: Boolean,
 })




</script>

<style scoped>
 .message {
   background: #e7e7e7;
   border-radius: 10px;
   padding: 1em;
   width: fit-content;
 }
 .right-message {
   background: #0d6efd;
   border-radius: 10px;
   color: whitesmoke;
   padding: 1em;
   width: fit-content;
 }
  .author{
    font-size: 16px;
    color: #0d6efd;
    font-weight: bold;
  }
  .text{
    font-size: 18px;
  }
.right-author{
  color:lightgrey;
  font-size: 16px;
  font-weight: bold;
}
 .align-right{
   margin-right: 3em;
   margin-left: auto;
 }
 .right-read-receipt{

 }
 .read-receipt{
   font-size: 12px;
   color: #0d6efd;
 }
</style>