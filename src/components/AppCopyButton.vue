<script lang="ts" setup>
import { defineProps, ref, withDefaults } from 'vue';
import AppButton from '@/components/AppButton.vue';

type Props = {
  data: string;
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const copied = ref(false);

let timer = -1;

const onClick = async (): Promise<void> => {
  window.clearTimeout(timer);

  await navigator.clipboard.writeText(props.data);

  copied.value = true;

  timer = window.setTimeout(() => {
    copied.value = false;
  }, 1500);
};
</script>

<template>
  <AppButton :active="copied" :disabled="props.disabled" @click="onClick">
    <span class="relative block">
      <span
        class="absolute inset-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 bg-stone-900 opacity-0 transition"
        :class="{ 'opacity-100': copied }"
      >
        Copied!
      </span>
      <slot />
    </span>
  </AppButton>
</template>
