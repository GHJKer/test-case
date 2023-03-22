import { createRouter, createWebHashHistory } from "vue-router";

import MainTest from "../components/MainTest.vue";
import MainAdd from "../components/MainAdd.vue";
import MainAuthorization from "../components/MainAuthorization.vue";
import MainOrders from "../components/MainOrders.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainTest,
      children: [
        {
          path: "/main-add",
          component: MainAdd,
        },
        {
          path: "/main-orders",
          component: MainOrders,
        },
      ],
    },
    {
      path: "/auth",
      component: MainAuthorization,
    },
  ],
});
