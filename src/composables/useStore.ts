import { Base64 } from 'js-base64';
import pako from 'pako';
import { onMounted, onUnmounted, ref } from 'vue';

export const useStore = () => {
  const state = ref('');

  const commit = (source: string): void => {
    // TODO: location.hash から計算できるようにする
    state.value = source;

    const compressed = pako.deflate(source);
    const encoded = Base64.fromUint8Array(compressed, true);

    window.history.replaceState(null, '', `#${encoded}`);
  };

  const restore = (): string => {
    try {
      const encoded = window.location.hash.replace(/^#/, '').trim();
      const decoded = Base64.toUint8Array(encoded);

      return pako.inflate(decoded, { to: 'string' });
    } catch {
      return '';
    }
  };

  onMounted(() => {
    state.value = restore();
  });

  return {
    state,
    commit,
  };
};
