import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';
<<<<<<< Updated upstream
=======
import ViteYaml from '@modyfi/vite-plugin-yaml';
>>>>>>> Stashed changes

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      ViteYaml(),
    ],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
<<<<<<< Updated upstream
  })
=======
  }),
>>>>>>> Stashed changes
);
