// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import { brand } from './src/config/brand.ts';

// The site deploys to both Netlify (where the contact form actually lives —
// Netlify Forms only works on Netlify's own infrastructure) and Vercel.
// Each platform's build sets its own env var, so pick the matching adapter
// and canonical URL automatically instead of hardcoding one host.
const isVercel = !!process.env.VERCEL;

const site = isVercel
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL}`
  : (process.env.URL ?? brand.url);

export default defineConfig({
  site,
  output: 'static',
  adapter: isVercel ? vercel({ imageService: true }) : netlify(),
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
