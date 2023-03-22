<script lang="ts" setup>
import MainHeader from "./components/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <div :class="$style['main-container']">
    <router-view></router-view>
  </div>
</template>
<style module>
.main-container {
  height: 100vh;
  background-color: rgb(var(--color_gray-light));
}
</style>
