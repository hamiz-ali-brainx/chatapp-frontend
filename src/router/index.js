import { createRouter, createWebHistory } from 'vue-router'
import Login from "../Views/Auth/Login.vue";
import Register from "../Views/Auth/Register.vue";
import DashBoard from "../Views/DashBoard.vue";
import ResetPassword from "../Views/Auth/ResetPassword.vue";
import Blocked from "../Views/Blocked/Blocked.vue";
import Messenger from "../Views/Messenger/Messenger.vue";
import Notifications from "../Views/Notifications/Notifications.vue";
import Requests from "../Views/Requests/Requests.vue";
import Settings from "../Views/Settings/Settings.vue";
import Spam from "../Views/Spam/Spam.vue";
import Conversation from "../Views/Messenger/Conversation.vue";


const guest = (to, from, next) => {
  if (!localStorage.getItem("token")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("token")) {
    return next();
  } else {
    return next("/login");
  }
};
const routes = [
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: Register,
  },
  {
    path: "/resetPassword/:token",
    name: "ResetPassword",
    component: ResetPassword,
    beforeEnter: guest,
    props: true
  },
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    redirect: '/messages',
    beforeEnter: auth,
    children: [
      {
        path: "/messages",
        name: 'messenger',
        component: Messenger,
        redirect: "/messages/conversation",

        children: [
          {
            path: "/messages/conversation",
            component:Conversation,
            props: true
          },
          {
            name: "Conversation",
            path: "/messages/conversation/:id/:name/:isGroup?",
            component:Conversation,
            props: true
          }
        ]

      },
      {
        path: "/blocked",
        component: Blocked

      },
      {
        path: "/notifications",
        component: Notifications

      },
      {
        path: "/requests",
        component: Requests

      },
      {
        path: "/settings",
        component: Settings

      },
      {
        path: "/spam",
        component: Spam
      }
    ]
  }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
