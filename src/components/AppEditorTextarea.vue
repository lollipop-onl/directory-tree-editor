<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits, ref, watch } from 'vue';
import keycode from 'keycode';
import { resolve } from 'path/posix';

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

const nextTick = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

const getIndents = (line: string): number => {
  const matches = /^ +/.exec(line);

  return matches?.[0].length || 0;
};

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

const onKeyDown = async (e: KeyboardEvent): Promise<void> => {
  const { target } = e;

  if (props.readOnly || !(target instanceof HTMLTextAreaElement)) return;

  const { value } = target;
  let { selectionStart, selectionEnd } = target;

  const lineStart = value.substring(0, selectionStart).split('\n').length - 1;
  const lineEnd = value.substring(0, selectionEnd).split('\n').length - 1;

  // tab キーでインデントの追加・削除
  if (keycode.isEventKey(e, 'tab')) {
    e.preventDefault();

    const lines = value.split('\n').map((line, index) => {
      if (index < lineStart || index > lineEnd) {
        return line;
      }

      const matches = /^ +/.exec(line);
      const shiftingIndents = (matches?.[0].length || 0) % 2 ? 1 : 2;

      if (e.shiftKey) {
        if (matches) {
          selectionStart -= index === lineStart ? shiftingIndents : 0;
          selectionEnd -= shiftingIndents;

          return line.substring(shiftingIndents);
        }

        return line;
      }

      selectionStart += index === lineStart ? shiftingIndents : 0;
      selectionEnd += shiftingIndents;

      return [' '.repeat(shiftingIndents), line].join('');
    });

    emit('update:value', lines.join('\n'));

    await nextTick();

    target.setSelectionRange(selectionStart, selectionEnd);

    return;
  }

  // enter キーで改行した際のインデントキープ
  if (keycode.isEventKey(e, 'enter')) {
    await nextTick();

    if (!textarea.value) return;

    const { value } = textarea.value;
    let { selectionStart, selectionEnd } = textarea.value;

    if (selectionStart !== selectionEnd) return;

    const indents = getIndents(value.split('\n')[lineStart]);
    const lineIndex = value.substring(0, selectionStart).split('\n').length - 1;
    const currentIndents = getIndents(value.split('\n')[lineIndex]);
    const shiftingIndents = indents - currentIndents;

    console.log({ indents, currentIndents, shiftingIndents });

    if (shiftingIndents === 0) return;

    const lines = value.split('\n').map((line, index) => {
      if (index !== lineIndex) return line;

      if (shiftingIndents > 0)
        return [' '.repeat(shiftingIndents), line].join('');

      return line.substring(shiftingIndents);
    });

    emit('update:value', lines.join('\n'));

    await nextTick();

    textarea.value.setSelectionRange(
      selectionStart + shiftingIndents + currentIndents,
      selectionEnd + shiftingIndents + currentIndents
    );

    return;
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
    class="resize-none overflow-scroll font-mono text-black outline-none"
    wrap="off"
    :readonly="props.readOnly"
    @scroll="onScroll"
    @input="onInput"
    @keydown="onKeyDown"
  ></textarea>
</template>
