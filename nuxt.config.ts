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
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'description', content: 'Powered by lollipop.onl' },
      { name: 'og:image', content: 'http://tree.tools.lollipop.onl/ogp.jpg' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@lollipop_onl' },
      { name: 'twitter:image', content: 'http://tree.tools.lollipop.onl/ogp.jpg' },
    ],
    title: 'DirectoryTree Editor'
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
