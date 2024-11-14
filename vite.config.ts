import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import yaml from 'vite-plugin-yaml';
import * as path from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), yaml],
  assetsInclude: ['**/*.yaml', '**/*.yml'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
