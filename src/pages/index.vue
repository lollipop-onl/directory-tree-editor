<template lang="pug">
.page-container
  TheNavbar(
    :version="version"
    @copy="copyPreview"
  )
  .content
    app-editor.editor(
      v-model="localSourceValue"
      :scrollTop.sync="localScrollTop"
      :placeholder="C.INPUT_PLACEHOLDER"
    )
    app-editor.editor(
      v-model="treeValue"
      readonly
      ref="preview"
      :scrollTop.sync="localScrollTop"
      :placeholder="C.PREVIEW_PLACEHOLDER"
    )
  TheFooter
</template>

<script lang="ts">
import qs from 'qs';
import { Component, Vue } from 'nuxt-property-decorator';
import { Ref } from 'vue-property-decorator';
import { version } from '../../package.json';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import AppEditor from '@/components/AppEditor.vue';
import * as C from '@/constants';
import { parseDirectoryTree } from '@/utils/tree';

@Component({
  components: {
    TheNavbar,
    TheFooter,
    AppEditor
  }
})
export default class IndexPage extends Vue {
  /** ソースコード */
  sourceValue = this.querySourceValue;
  /** スクロール位置 */
  scrollTop = 0;

  /** 定数ファイル */
  get C() {
    return C;
  }

  /** パッケージバージョン */
  get version() {
    return version;
  }

  /** クエリのソース */
  get querySourceValue() {
    if (!process.client) return '';

    const query = location.search.replace(/^\?/, '');
    const { source } = qs.parse(query);
    const sourceValue = Array.isArray(source) ? source[0] : source;

    return typeof sourceValue === 'string' ? sourceValue : '';
  }

  /** 変換された値 */
  get localSourceValue() {
    return this.sourceValue;
  }

  set localSourceValue(value: string) {
    this.$router.replace({
      query: {
        source: value || undefined
      }
    });

    this.sourceValue = value;
  }

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

  /** プレビューフィールド */
  @Ref('preview')
  previewField?: AppEditor;

  /**
   * プレビューの値をコピーする
   */
  copyPreview(): void {
    if (!this.previewField) return;

    const element = this.previewField.$el;

    if (!(element instanceof HTMLTextAreaElement)) return;

    element.select();

    document.execCommand('copy');
  }
}
</script>

<style lang="sass" scoped>
@import '@resources'

.page-container
  & > .content
    display: flex
    box-sizing: border-box
    width: 100%
    height: calc(var(--vh, 1vh) * 100 - 96px)
    border-right: 16px solid $_base
    border-left: 16px solid $_base

  & > .content > .editor
    flex-grow: 1

  & > .content > .editor:not(:first-child)
    border-left: 4px solid $_base
</style>
