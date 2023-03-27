<script lang="ts" setup>
import { onBeforeMount } from "vue";
import MainHeader from "./MainHeader.vue";
import { useStore } from "../store/useStore";
import router from "../router";

let store = useStore();

onBeforeMount(() => {
  if (store.isLogged !== true) {
    console.log("not logged");
    router.push({ path: "/auth" });
  }
});
</script>

<template>
  <div>
    <MainHeader />
    <router-view></router-view>
  </div>
</template>
