import { defineConfig } from "astro/config";

// Astro integrations imports
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel(),
	site: "https://www.albertevieites.com",
	integrations: [
		sitemap(),
		robotsTxt(),
		react(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
