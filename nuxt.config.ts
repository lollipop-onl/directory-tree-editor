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
  mode: 'universal',
  srcDir: 'src',
  generate: {
    routes: [
      '/'
    ]
  },
};

export default config;
