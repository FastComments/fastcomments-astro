import { defineConfig } from 'astro/config';

const buildingDemo = process.env.BUILD_DEMO === '1';

export default defineConfig({
    ...(buildingDemo
        ? {
              base: '/commenting-system-for-astro',
              trailingSlash: 'always',
          }
        : {}),
});
