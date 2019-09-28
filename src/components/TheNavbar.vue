<template lang="pug">
nav.global-navbar
  img.logo(
    src="@/assets/images/logo.svg"
    alt="DirectoryTree Editor"
  )
  button.copy(@click="$emit('copy')") Copy
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

  & > .copy
    padding: 4px 10px
    margin-right: 18px
    opacity: .6
    font-family: Fira Code, monospace
    font-size: 14px
    color: $_text-white
    cursor: pointer
    background: none
    border: 1px solid rgba($_text-white, .5)
    border-radius: 4px
    transition: opacity .2s ease

  & > .copy:hover
    opacity: 1

  & > .version
    font-family: Fira Code, monospace
    font-size: 14px
    color: rgba($_text-white, .8)
</style>
