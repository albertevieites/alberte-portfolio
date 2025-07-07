import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectsSchema = ({ image }: { image: any }) =>
	z.object({
		name: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		isLightTheme: z.boolean().optional(),
		overview: z.string(),
		conclusion: z.string(),
		image_1: image(),
		alt_1: z.string(),
		image_2: image().optional(),
		alt_2: z.string().optional(),
		github: z.string().url(),
		deploy: z.string().url().optional(),
		features: z.array(
			z.object({
				title: z.string(),
				description: z.string(),
			})
		),
		backgroundColor: z.string(),
		navbarColor: z.string(),
	});

const webProjectsCollection = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/web-projects",
	}),
	schema: projectsSchema,
});

const dataProjectsCollection = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/data-projects",
	}),
	schema: projectsSchema,
});

export const collections = {
	"web-projects": webProjectsCollection,
	"data-projects": dataProjectsCollection,
};
