// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import favicons from 'astro-favicons';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.eduroots.org/',
  integrations: [favicons(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  base: '/',
  // trailingSlash: 'always',

  adapter: vercel(),

});