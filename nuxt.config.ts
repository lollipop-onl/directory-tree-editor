import { Configuration } from '@nuxt/types';

const config: Configuration = {
  build: {
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
