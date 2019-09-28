<template lang="pug">
nav.global-navbar
  img.logo(
    src="@/assets/images/logo.svg"
    alt="DirectoryTree Editor"
  )
  .version v{{version}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class TheNavbar extends Vue {
  @Prop({ type: String, required: true })
  version!: string;
}
</script>

<style lang="sass" scoped>
@import '@resources'

.global-navbar
  &
    display: flex
    align-items: center
    box-sizing: border-box
    height: 64px
    padding: 0 28px
    background: $_base

  & > .logo
    display: block
    height: 20px
    margin-right: auto

  & > .version
    font-family: Fira Code, monospace
    font-size: 14px
    color: rgba($_text-white, .8)
</style>
