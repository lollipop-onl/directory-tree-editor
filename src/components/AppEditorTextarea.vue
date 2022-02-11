<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits, ref, watch } from 'vue';

type Props = {
  value: string;
  scrollPosition: number;
  readOnly?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  readOnly: false,
});

const emit = defineEmits<{
  (e: 'update:scrollPosition', value: number): void;
  (e: 'update:value', value: string): void;
}>();

const textarea = ref<HTMLTextAreaElement>();

const onScroll = (e: UIEvent): void => {
  if (e.target instanceof HTMLTextAreaElement) {
    emit('update:scrollPosition', e.target.scrollTop);
  }
};

const onInput = (e: Event): void => {
  if (e.target instanceof HTMLTextAreaElement) {
    emit('update:value', e.target.value);
  }
};

watch(
  () => props.scrollPosition,
  (scrollPosition) => {
    if (textarea.value) {
      if (textarea.value.scrollTop !== scrollPosition) {
        textarea.value.scrollTo({ top: scrollPosition });
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <textarea
    ref="textarea"
    v-model="props.value"
    class="overflow-scroll text-black"
    wrap="off"
    :readonly="props.readOnly"
    @scroll="onScroll"
    @input="onInput"
  ></textarea>
</template>
