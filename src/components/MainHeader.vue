<script lang="ts" setup>
import MainBtn from "./MainBtn.vue";
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
        <span>Имя Фамилия</span>

        <MainBtn> Выйти </MainBtn>
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
