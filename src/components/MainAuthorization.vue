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
let showWarning = ref(false);

let getProfile = async () => {
  const result = await requestBase(`users?name=${userName.value}`);
  if (result.length > 1 || !result.length) {
    showWarning.value = true;
    return;
  }
  if (userPassword.value === result[0].password) {
    store.storeData(result[0]);
    store.authorize(true);

    const orders = await requestBase(`events?name=${userName.value}`);
    store.addProfileOrders(orders);
    showWarning.value = false;
    router.push("/main-orders");
  } else {
    showWarning.value = true;
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
      <span :class="$style['warning']" v-if="showWarning"
        >Неверное имя пользователя или пароль</span
      >
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

.warning {
  position: absolute;
  top: 60%;
  color: rgb(var(--color_red));
  font-size: 10px;
}

.btn {
  align-self: center;
}
</style>
