<template lang="pug">
div
  TheNavbar
  h1 hello world
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TheNavbar from '@/components/TheNavbar.vue';

@Component({
  components: {
    TheNavbar
  }
})
export default class IndexPage extends Vue {
}
</script>

<style lang="sass" scoped>
</style>
