<script lang="ts" setup>
import { ref } from "vue";
import MainInput from "./MainInput.vue";
import MainBtn from "./MainBtn.vue";
import { addRequest } from "../use/useRequest";
import { actualDate } from "../use/helpers/useDate";
import { requestBase } from "../use/useRequest";
import { useStore } from "../store/useStore";

let store = useStore();

let name = ref("");
let address = ref("");
let comment = ref("");

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const addRequestHandle = async () => {
  await addRequest({
    id: getRandomInt(999),
    name: name.value,
    address: address.value,
    date: actualDate(),
    status: "Новый",
    comment: comment.value,
  });

  const orders = await requestBase(`events?name=${name.value}`);
  store.addProfileOrders(orders);
};
</script>
<template>
  <form :class="$style['main-container']">
    <div :class="$style['input-group']">
      <MainInput v-model="name" :placeholder="'Введите ваше имя'" />
      <MainInput v-model="address" :placeholder="'Введите ваш адрес'" />
      <MainInput v-model="comment" :placeholder="'Комментарий'" />
    </div>
    <MainBtn
      @click="addRequestHandle"
      :color="'dark'"
      :width="'115px'"
      height="25px"
    >
      Добавить заказ
    </MainBtn>
  </form>
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
