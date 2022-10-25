<template>

  <div class="col-10 ms-5  message-box position-relative ms-4">

    <h4 v-if=props.name class="fw-bold fs-5">
      {{ props.name }}'s Conversation
    </h4>
    <h4 v-else class="fw-bold fs-5">
      Welcome Back
    </h4>
    <hr class="breaker"/>
    <div :class="[(props.isGroup === 'true')? 'display-group':  'd-none']" class="message-display  rounded"
         id="group style-scrollbar">
      <div v-for="message in getGroupMessages">
        <Message class="mt-2 mb-2 ms-5" v-if="store.getters['auth/user'].id!=message.sender_id" :text=message.body
                 :author="store.getters['auth/getUser'](message.sender_id).name"/>
        <Message class="mt-2 mb-2 " v-else :text=message.body right/>
      </div>
    </div>
    <div v-if="!isGroup && props.name" class="message-display  rounded"
         id="message style-scrollbar">
      <div v-for="message in getMessages">
        <Message class="mt-2 mb-2 ms-5" v-if="props.id==message.sender_id" :text=message.body :author="props.name"/>
        <Message class="mt-2 mb-2 " v-else :text=message.body right/>
      </div>
    </div>
    <div v-if="!props.name" class="message-display  rounded">
    </div>

    <div v-if="props.name" class="message-input">
      <div class="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
        <div class="input-group text-input">
          <div class="input-group-text bg-transparent border-0 chat-button">
            <button class="btn btn-light text-secondary">
              <font-awesome-icon icon="paperclip" size="2x" class="text-primary"/>
            </button>
          </div>
          <textarea class="form-control border-5 border-primary" v-model="text"
                    placeholder="Write a message..."></textarea>
          <div class="input-group-text bg-transparent border-0 ">
            <button class="btn btn-light text-secondary " @click="onSent">
              <font-awesome-icon icon="share" size="2x" class="text-primary"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="message-input">
    </div>

  </div>

</template>

<script setup>
import Message from "../../components/MessengerLayout/Message.vue";
import {ref, computed, watch, onMounted} from "vue";
import {useStore} from "vuex";

const text = ref("");
const store = useStore();
const props = defineProps(["id", "name", "isGroup"]);
const getMessages = computed(() => {
  return store.state.messages.messages
})
const getGroupMessages = computed(() => {
  return store.state.messages.groupMessages
})

async function onSent(e) {
  e.preventDefault();

  if (!props.isGroup) {
    await store.dispatch('messages/sendMessage', {
      "receiver_id": props.id,
      "text": text.value
    })
    text.value = "";
    await store.dispatch("messages/getAllmessages", {
      with: props.id,
    })
  } else {
    await store.dispatch('messages/sendGroupMessage', {
      "group_id": props.id,
      "text": text.value
    })
    text.value = "";
    await store.dispatch("messages/getGroupConversation", {
      group_id: props.id,
    })
  }
}

watch(
    () => props.id, async () => {
      await store.dispatch("messages/getAllmessages", {
        with: props.id,
      })
      await store.dispatch("messages/getGroupConversation", {
        group_id: props.id,
      })

    }
)

onMounted(async () => {

  await store.dispatch("auth/getAllUsers");
  console.log()
})


</script>
<style scoped>
.message-box {
  height: 47.5em;
}

.message-input {
  width: 96%;
  bottom: 0;
  height: 8em;
  position: absolute;
}

.breaker {
  width: 95%;
}

.message-display {
  background: #B9D9EB;
  height: 600px;
  width: 95%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.display-group {
  display: block !important;
}

.display-message {
  display: block !important;
}

.chat-button {
  height: 100%;
}


</style>