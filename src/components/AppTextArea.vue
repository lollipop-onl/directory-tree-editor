<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const value = ref('');

onMounted(() => {
  value.value = 'hello world.';
});
</script>

<template>
  <textarea
    v-model="value"
    class="h-full w-full resize-none bg-stone-100"
  ></textarea>
</template>
