<script lang="ts" setup>
const name = 'simochee';
const appVersion = `${__APP_VERSION__}`;
</script>

<template>
  <img src="@/assets/logo.svg" alt="Directory Tree Editor" />
  <p>v{{ appVersion }}</p>
  <h1 class="mt-4 bg-red-100">Hello, {{ name }}</h1>
</template>
