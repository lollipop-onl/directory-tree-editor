<template lang="pug">
.page-content
  app-editor.editor(
    v-model="sourceValue"
    :scrollTop.sync="localScrollTop"
  )
  app-editor.editor(
    readonly
    v-model="treeValue"
    :scrollTop.sync="localScrollTop"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AppEditor from '@/components/AppEditor.vue';
import { parseDirectoryTree } from '@/utils/tree';

@Component({
  components: {
    AppEditor
  }
})
export default class IndexPage extends Vue {
  /** ソースコード */
  sourceValue = '';
  /** スクロール位置 */
  scrollTop = 0;

  /** 変換された値 */
  get treeValue() {
    return parseDirectoryTree(this.sourceValue);
  }

  set treeValue(value: string) {
    this.sourceValue = value;
  }

  /** ローカルのスクロール位置 */
  get localScrollTop() {
    return this.scrollTop
  }

  set localScrollTop(scrollTop: number) {
    this.scrollTop = scrollTop;
  }
}
</script>

<style lang="sass" scoped>
@import '@resources'

.page-content
  &
    display: flex
    box-sizing: border-box
    height: calc(var(--vh, 1vh) * 100 - 96px)
    border-right: 16px solid $_base
    border-left: 16px solid $_base

  & > .editor
    flex-grow: 1

  & > .editor:not(:first-child)
    border-left: 4px solid $_base
</style>
