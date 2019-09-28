<template lang="pug">
nva.global-navbar
  img.logo(src="@/assets/images/logo.svg")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class TheNavbar extends Vue {
}
</script>

<style lang="sass" scoped>
@import '@resources'

.global-navbar
  &
    display: flex
    background: $_base
</style>
