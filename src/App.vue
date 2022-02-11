<script lang="ts" setup>
const name = 'simochee';
const appVersion = `v${__APP_VERSION__}`;
</script>

<template>
  <div class="flex h-full w-full flex-col bg-stone-900 px-4 md:px-6">
    <header class="flex h-16 items-center md:px-1">
      <img class="h-5" src="@/assets/logo.svg" alt="DirectoryTree Editor" />
    </header>
    <main class="flex-grow">
      <div class="grid h-full grid-rows-2 gap-1 md:grid-cols-2 md:grid-rows-1">
        <textarea class="h-full w-full resize-none bg-stone-100"></textarea>
        <textarea
          class="h-full w-full resize-none bg-stone-100"
          readonly
        ></textarea>
      </div>
    </main>
    <footer class="flex items-center justify-between p-2 leading-none">
      <span class="font-mono">
        <span class="mr-1 text-[10px] text-gray-400">powered by</span>
        <a
          class="text-xs text-gray-300 hover:text-gray-100"
          href="https://twitter.com/lollipop_onl"
          target="_blank"
          >@lollipop_onl</a
        ></span
      >
      <span class="font-mono text-xs text-gray-400">{{ appVersion }}</span>
    </footer>
  </div>
</template>
