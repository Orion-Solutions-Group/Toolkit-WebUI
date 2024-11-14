import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import yaml from 'vite-plugin-yaml';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), yaml],
  assetsInclude: [
    '**/*.yaml',
    '**/*.yml',
  ],
});
