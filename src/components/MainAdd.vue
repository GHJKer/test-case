<script lang="ts" setup>
import MainInput from "./MainInput.vue";
import MainBtn from "./MainBtn.vue";
</script>
<template>
  <div :class="$style['main-container']">
    <div :class="$style['input-group']">
      <MainInput :placeholder="'Введите ваше имя'" />
      <MainInput :placeholder="'Введите ваш адрес'" />
      <MainInput :placeholder="'Комментарий'" />
    </div>
    <MainBtn :color="'dark'" :width="'115px'" height="25px">
      Добавить заказ
    </MainBtn>
  </div>
</template>
<style module>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  gap: 29px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
