<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from '@/composables/useStore';
import AppEditorTextarea from '@/components/AppEditorTextarea.vue';
import { indentToDirTree } from '@/utils/parser';

const EDITOR_PLACEHOLDER = `.
  # Assets files
  assets
    images
    css
    fonts
  # Vue components
  components
    Atoms
    Molecules
    Organisms
  # Page components
  containers
    ...
  # Utilities
  utils
    # Entry file
    index.ts
    ...
  # Node.js packages
  node_modules
  # Node.js configuration file
  package.json
  # Documentation (this file)
  README.md`;

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
      :placeholder="EDITOR_PLACEHOLDER"
    />
    <AppEditorTextarea
      v-model:scroll-position="scrollPosition"
      :value="dirTree"
      :placeholder="indentToDirTree(EDITOR_PLACEHOLDER)"
      read-only
    />
  </div>
</template>
