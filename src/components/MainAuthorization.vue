<script lang="ts" setup>
import { ref } from "vue";
import MainInput from "./MainInput.vue";
import MainBtn from "./MainBtn.vue";
import { useStore } from "../store/useStore";
import { requestBase } from "../use/useRequest";
import router from "../router";

let store = useStore();
let userName = ref("");
let userPassword = ref();

let getProfile = async () => {
  const result = await requestBase(`users?name_like=${userName.value}`);
  if (result.length > 1) {
    console.log(">2", result);
    return;
  }
  if (userPassword.value === result[0].password) {
    store.storeData(result[0]);
    store.authorize(true);

    const orders = await requestBase(`events?name=${userName.value}`);
    console.log(orders);
    store.addProfileOrders(orders);

    router.push("/main-orders");
  } else {
    console.log("wrong password");
    return;
  }
};
</script>

<template>
  <div :class="$style['main-container']">
    <div :class="$style['input-group']">
      <MainInput v-model="userName" :width="180" :placeholder="'username'" />
      <MainInput
        v-model="userPassword"
        :width="180"
        :placeholder="'password'"
      />
    </div>
    <MainBtn
      :width="'104px'"
      :height="'29px'"
      :class="$style['btn']"
      @click="getProfile"
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
