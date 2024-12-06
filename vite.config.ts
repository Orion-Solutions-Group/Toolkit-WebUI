import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'OrionToolkit',
      fileName: (format) => `orion-toolkit.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Exclure Vue pour éviter les conflits
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(path.resolve(__dirname, 'tailwind.config.js')),
        autoprefixer(),
      ],
    },
  },
});
