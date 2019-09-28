<template lang="pug">
textarea.field(
  ref="textarea"
  v-model="localValue"
  @keydown="onKeyDown"
  @scroll="onScroll"
)
</template>

<script lang="ts">
import keycode from 'keycode';
import { Component, Model, Watch, Vue } from 'nuxt-property-decorator';
import { PropSync, Ref } from 'vue-property-decorator';

@Component
export default class AppEditor extends Vue {
  /** スクロール位置 */
  @PropSync('scrollTop', { type: Number, required: true })
  localScrollTop!: number;

  /** 入力値 */
  @Model('input', { type: String, required: true })
  value!: string;

  /** textarea */
  @Ref('textarea')
  textarea?: HTMLTextAreaElement;

  /** ローカルの入力値 */
  get localValue() {
    return this.value;
  }

  set localValue(value: string) {
    this.$emit('input', value);
  }

  /**
   * スクロール位置が変わったとき
   */
  @Watch('localScrollTop', { immediate: true })
  onChangeScrollTop(): void {
    const { textarea } = this;

    if (!textarea) {
      return;
    }

    textarea.scrollTo({ top: this.localScrollTop });
  }

  /**
   * キーが押されたときの処理
   */
  async onKeyDown(e: any): Promise<void> {
    if (!keycode.isEventKey(e, 'tab')) {
      return;
    }

    e.preventDefault();

    const { target } = e as { target: HTMLTextAreaElement };
    let { value } = target;

    let selectionStart = target.selectionStart;
    let selectionEnd = target.selectionEnd;
    let lineStart = value.substr(0, selectionStart).split('\n').length - 1;
    let lineEnd = value.substr(0, selectionEnd).split('\n').length - 1;
    const lines = value.split('\n');

    lines.forEach((line, i) => {
      if (i < lineStart || i > lineEnd) {
        return;
      }

      if (e.shiftKey) {
        if (/^  /.test(line)) {
          // 行頭のタブを削除
          lines[i] = line.substr(2);
          selectionStart -= i === lineStart ? 2 : 0;
          selectionEnd -= 2;
        }

        return;
      }

      // 行頭にタブを挿入
      lines[i] = `  ${line}`;
      selectionStart += i === lineStart ? 2 : 0;
      selectionEnd += 2;
    });

    this.localValue = lines.join('\n');

    await this.$nextTick();

    target.setSelectionRange(selectionStart, selectionEnd);
  }

  /**
   * スクロールされたときの処理
   */
  onScroll(e: any): void {
    const { target } = e as { target: HTMLTextAreaElement };
    const { scrollTop } = target;

    this.localScrollTop = scrollTop;
  }
}
</script>

<style lang="sass" scoped>
.field
  &
    box-sizing: border-box
    padding: 30px
    font-family: Fira Code, monospace
    font-size: 14px
    line-height: 1.5
    background: #eee
    resize: none
</style>
