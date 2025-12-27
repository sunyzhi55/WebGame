import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sunyzhi55.github.io/',
  base: '/WebGame/',
  integrations: [tailwind()],
});
