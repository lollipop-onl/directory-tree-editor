<script lang="ts" setup>
import { onMounted, ref, defineProps, withDefaults } from 'vue';
import AppEditorTextarea from '@/components/AppEditorTextarea.vue';

type Props = {
  readOnly?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  readOnly: false,
});

const value = ref('');
const scrollPosition = ref(0);

const handleKeyDown = (e: KeyboardEvent) => {
  if (props.readOnly) return;
};

const onInput = (e: Event) => {
  if (e.target instanceof HTMLDivElement) {
    value.value = e.target.textContent || '';
  }
};

onMounted(() => {
  value.value = 'hello world.';
});
</script>

<template>
  <div
    class="grid min-h-full grid-cols-2 gap-1 overflow-y-auto text-white md:grid-cols-2 md:grid-rows-1"
  >
    <AppEditorTextarea
      v-model:value="value"
      v-model:scroll-position="scrollPosition"
    />
    <AppEditorTextarea
      v-model:value="value"
      v-model:scroll-position="scrollPosition"
      read-only
    />
  </div>
</template>
