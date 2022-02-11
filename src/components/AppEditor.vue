<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from '@/composables/useStore';
import AppEditorTextarea from '@/components/AppEditorTextarea.vue';
import { indentToDirTree } from '@/utils/parser';

const store = useStore();

const scrollPosition = ref(0);

const source = computed<string>({
  get() {
    return store.state.value;
  },
  set(value: string) {
    store.commit(value);
  },
});

const dirTree = computed(() => indentToDirTree(source.value));
</script>

<template>
  <div
    class="grid min-h-full grid-rows-2 gap-2 overflow-y-auto text-white md:grid-cols-2 md:grid-rows-1"
  >
    <AppEditorTextarea
      v-model:value="source"
      v-model:scroll-position="scrollPosition"
    />
    <AppEditorTextarea
      :value="dirTree"
      v-model:scroll-position="scrollPosition"
      read-only
    />
  </div>
</template>
