<script lang="ts" setup>
import MainBtn from "./MainBtn.vue";

const emit = defineEmits(["ok", "cancel"]);
</script>
<template>
  <div id="modal-fader" :class="$style['modal-fader']">
    <div id="modal" :class="$style['modal-window']">
      <span>Вы действительно хотите удалить заказ?</span>
      <div :class="$style['buttons']">
        <MainBtn @click="emit('ok')">Ок</MainBtn>
        <MainBtn @click="emit('cancel')">Отмена</MainBtn>
      </div>
    </div>
  </div>
</template>
<style module>
.modal-fader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 99998;
  background: rgba(0, 0, 0, 0.8);
  overflow: auto;
  padding-bottom: 20%;
}

.modal-window {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  width: 335px;
  height: 215px;
  background: rgb(var(--color_gray));
  padding: 63px 19px;
  top: 10%;
}

.buttons {
  display: flex;
  gap: 40px;
}
</style>
