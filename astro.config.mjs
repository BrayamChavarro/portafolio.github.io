import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://brayamchavarro.github.io/',
  base: '/brayamchavarro.github.io/', // Cambiado para GitHub Pages
  outDir: 'dist',
});

