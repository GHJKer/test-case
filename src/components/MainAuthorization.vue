<script lang="ts" setup>
import MainInput from "./MainInput.vue";
import MainBtn from "./MainBtn.vue";
</script>

<template>
  <div :class="$style['main-container']">
    <div :class="$style['input-group']">
      <MainInput :width="180" :placeholder="'username'" />
      <MainInput :width="180" :placeholder="'password'" />
    </div>
    <MainBtn :width="'104px'" :height="'29px'" :class="$style['btn']"
      >Войти</MainBtn
    >
  </div>
</template>
<style module>
.main-container {
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  gap: 37px;
  width: 230px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(var(--color_gray-dark));
  padding: 38px 57px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.btn {
  align-self: center;
}
</style>
