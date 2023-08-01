import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://sample.com', // TODO: ドメインが決まったら修正する
  integrations: [vue(), tailwind(), sitemap()],
  vite: {
    build: {
      manifest: false,
      outDir: 'docs',
      assetsDir: 'assets',
      cssCodeSplit: false,
      // buildした際にcssを分割しない
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            let extType = assetInfo.name.split('.').at(1);
            // if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            //   extType = 'img';
            // }
            if (/css|scss/i.test(extType)) {
              extType = 'css';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/vendor/[name]-[hash].js',
          // ビルド後のチャンクファイル名
          entryFileNames: 'assets/js/[name].js' // ビルド後のentryのjsファイル名
        }
      }
    },

    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      }
    }
  }
});