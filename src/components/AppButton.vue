<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue';

type Props = {
  active?: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  active: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button
    class="rounded-md border border-stone-400 px-2 py-1 font-mono text-xs text-stone-400 transition"
    :class="{
      'border-stone-100 text-stone-100': props.active,
      'hover:border-stone-100 hover:text-stone-100': !props.disabled,
    }"
    @click.prevent="emit('click')"
  >
    <slot />
  </button>
</template>
