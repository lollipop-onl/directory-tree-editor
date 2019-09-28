import { Configuration } from '@nuxt/types';
import path from 'path';

const config: Configuration = {
  build: {
    extend(config) {
      // Sassのリソースファイルへのエイリアス
      if (config.resolve && config.resolve.alias) {
        config.resolve.alias['@resources'] = path.resolve(__dirname, 'src/assets/styles/resources.sass');
      }
    },
    hardSource: true,
  },
  buildModules: ['@nuxt/typescript-build'],
  css: ['reset.css'],
  head: {
    link: [
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css' }
    ]
  },
  mode: 'universal',
  srcDir: 'src',
  generate: {
    routes: [
      '/'
    ]
  },
};

export default config;
