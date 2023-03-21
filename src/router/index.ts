import { createRouter, createWebHashHistory } from "vue-router";

import MainTest from "../components/MainTest.vue";
import MainAdd from "../components/MainAdd.vue";
import MainAuthorization from "../components/MainAuthorization.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainTest,
    },
    {
      path: "/main-add",
      component: MainAdd,
    },
    {
      path: "/auth",
      component: MainAuthorization,
    },
  ],
});
