<script lang="ts" setup>
interface Props {
  modelValue: string | number;
  width?: number;
  placeholder?: string;
  type?: string;
}

const props = defineProps<Props>();

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <input
      :value="props.modelValue"
      @input="updateValue"
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
