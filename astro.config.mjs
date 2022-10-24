import { defineConfig } from 'astro/config';

// Astro integrations imports
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(),
  site: 'https://www.albertevieites.com',
  integrations: [
    image(),
    sitemap(),
    robotsTxt(),
  ]
});
