import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Projects: one Markdown file per project per language.
    src/content/projects/en/<slug>.md
    src/content/projects/fr/<slug>.md   (same <slug>)
  The front matter drives the cards; the body is the project's own page.
*/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),                       // small label on the card
    icon: z.string(),                      // icon id from Icons.astro, without "i-"
    cats: z.array(z.enum(['hw', 'fw', 'sw', 'db'])),
    chips: z.array(z.string()).default([]),
    summary: z.string(),                   // card text
    order: z.number(),                     // lower = earlier
    flagship: z.boolean().default(false),  // big full-width card
    featured: z.boolean().default(false),  // shown on the home page
    flow: z
      .array(z.object({ name: z.string(), detail: z.string(), link: z.string().optional() }))
      .optional(),                         // optional system diagram
  }),
});

export const collections = { projects };
