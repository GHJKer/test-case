<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  width?: number;
  placeholder?: string;
  type?: string;
}

const props = defineProps<Props>();

const inputValue = ref("");
const emit = defineEmits(["inputValue"]);
</script>

<template>
  <div>
    <input
      v-model="inputValue"
      @input="emit('inputValue', inputValue)"
      :placeholder="placeholder"
      :type="type"
      :style="{ width: props.width + 'px' }"
    />
  </div>
</template>

<style module>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  height: 34px;
  padding-left: 15px;
  margin-left: 0;
  color: rgb(var(--color_black));
  border: transparent;
}

input:focus {
  outline: 0;
}

input::placeholder {
  color: rgb(var(--color_black));
  opacity: 0.5;
}
</style>
