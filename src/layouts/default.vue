<template lang="pug">
nuxt
</template>

<script lang="ts">
import { bind, debounce } from 'helpful-decorators';
import { Component, Vue } from 'nuxt-property-decorator';
import { version } from '../../package.json';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component
export default class DefaultLayout extends Vue {
  /** ライフサイクル */
  beforeMount(): void {
    this.updateVh();

    // リサイズ時にvhの更新を設定する
    window.addEventListener('resize', this.updateVh);
  }

  /** ライフサイクル */
  public beforeDestroy(): void {
    window.removeEventListener('resize', this.updateVh);
  }

  /**
   * vhの値を更新する
   */
  @bind
  @debounce(200)
  private updateVh(): void {
    const vh = window.innerHeight * 0.01;
    const { documentElement } = document;

    if (documentElement instanceof HTMLElement) {
      documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }
}
</script>

<style lang="sass" scoped></style>
