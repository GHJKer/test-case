<script lang="ts" setup>
const emit = defineEmits(["click"]);

interface Props {
  color?: "dark";
  width?: string;
  height?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    @click="(e: Event) => emit('click', e)"
    :class="$style['btn']"
    :style="{
      width: props.width ? `${props.width}` : '78px',
      height: props.height ? `${props.height}` : '27px',
      backgroundColor:
        props.color === 'dark'
          ? 'rgb(var(--color_gray-dark))'
          : 'rgb(var(--color_white))',
    }"
  >
    <slot />
  </button>
</template>

<style module>
.btn {
  /* width: 78px; */
  /* height: 27px; */
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgb(var(--color_gray-light));
  cursor: pointer;
  transition: border-color 0.25s;
}

.btn:focus,
.btn:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
