import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import * as path from 'node:path';

export default defineConfig({
  plugins: [vue(), ViteYaml()],
  assetsInclude: ['**/*.yaml', '**/*.yml'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
