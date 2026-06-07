// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://www.example.com',
  output: 'static',
  adapter: netlify(),
   build: {
    inlineStylesheets: 'always',
  },
  image: {
    domains: ['ik.imagekit.io'],
  },
  integrations: [sitemap(), robotsTxt(), react(), keystatic()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: ['400', '600', '700'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400', '500', '700'],
      styles: ['normal'],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
