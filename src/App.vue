<script lang="ts" setup>
import AppEditor from '@/components/AppEditor.vue';
import AppButton from '@/components/AppButton.vue';
import AppCopyButton from '@/components/AppCopyButton.vue';
import { useStore } from '@/composables/useStore';
import { indentToDirTree } from '@/utils/parser';
import { computed } from 'vue';

const APP_VERSION = `v${__APP_VERSION__}`;

const store = useStore();

const serializedUrl = computed(() => {
  const { origin, hash } = window.location;
  const url = new URL('/', origin);

  url.hash = hash;

  return url.toString();
});

const serializedDirTree = computed(() =>
  indentToDirTree(
    store.state.value
      .split('\n')
      .filter((line) => line.trim())
      .join('\n')
  )
);

const isSourceEmpty = computed(() => store.state.value.trim().length === 0);
</script>

<template>
  <div
    class="flex h-full w-full flex-col overflow-hidden bg-stone-900 px-4 md:px-6"
  >
    <header class="flex h-16 flex-shrink-0 items-center space-x-3 md:px-2">
      <img
        class="mr-auto h-5"
        src="@/assets/logo.svg"
        alt="DirectoryTree Editor"
      />
      <AppCopyButton :data="serializedUrl" :disabled="isSourceEmpty">
        Copy URL
      </AppCopyButton>
      <AppCopyButton :data="serializedDirTree" :disabled="isSourceEmpty">
        Copy DirectoryTree
      </AppCopyButton>
    </header>
    <main class="flex-grow">
      <AppEditor />
      <div
        class="grid h-full grid-rows-2 gap-1 md:grid-cols-2 md:grid-rows-1"
      ></div>
    </main>
    <footer class="relative flex-shrink-0 p-2 leading-none">
      <div class="flex items-center justify-between">
        <span class="font-mono text-[10px]">
          <span class="mr-1 inline-block text-gray-400">by</span>
          <a
            class="text-gray-300 hover:text-gray-100"
            href="https://twitter.com/lollipop_onl"
            target="_blank"
            >@lollipop_onl
          </a>
        </span>
        <a
          class="font-mono text-xs text-gray-400 hover:text-gray-100"
          href="https://github.com/lollipop-onl/directory-tree-editor"
          target="_blank"
        >
          {{ APP_VERSION }}
        </a>
      </div>
      <p
        class="mt-1 text-center text-[10px] text-stone-400 md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2"
      >
        このサイトでは改善のため Google Analytics を導入しています
      </p>
    </footer>
  </div>
</template>
