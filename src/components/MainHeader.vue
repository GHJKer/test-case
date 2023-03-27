<script lang="ts" setup>
import { ref } from "vue";
import MainBtn from "./MainBtn.vue";
import { useStore } from "../store/useStore";
import router from "../router";

const store = useStore();
const name = ref(store.profileData?.name);

const logOut = () => {
  store.profileData = null;
  store.profileOrders = null;
  store.authorize(false);
  router.push("/auth");
};
</script>

<template>
  <div :class="$style['main-container']">
    <div :class="[$style['header-content'], 'container']">
      <div :class="$style['header_left-group']">
        <div>
          <span><a href="#/main-orders">Все заказы</a></span>
        </div>
        <div>
          <span><a href="#/main-add">Добавить заказ</a></span>
        </div>
      </div>
      <div :class="$style['header_right-group']">
        <span>{{ name }}</span>

        <MainBtn @click="logOut"> Выйти </MainBtn>
      </div>
    </div>
  </div>
</template>

<style module>
a {
  color: rgb(var(--color_white));
}

.main-container {
  display: flex;
  width: 100%;
  height: 52px;
  background-color: rgb(var(--color_blue));
  color: rgb(var(--color_white));
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.header_left-group {
  display: flex;
  gap: 20px;
}

.header_right-group {
  display: flex;
  align-items: center;
  gap: 28px;
}

.header_right-group span {
  color: rgb(var(--color_black));
}
</style>
