<template lang="pug">
footer.global-footer
  img.copyright(
    src="@/assets/images/copyright.svg"
    alt="DirectoryTree Editor"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class TheNavbar extends Vue {
}
</script>

<style lang="sass" scoped>
@import '@resources'

.global-footer
  &
    box-sizing: border-box
    display: flex
    align-items: center
    height: 32px
    padding: 0 28px
    background: $_base

  & > .copyright
    height: 14px
    margin-left: auto
    opacity: 0.5
    transition: opacity .3s cubic-bezier(0.23, 1, 0.32, 1)

  & > .copyright:hover
    opacity: 0.8
</style>
