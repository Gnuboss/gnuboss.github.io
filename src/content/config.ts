import { defineCollection, z } from 'astro:content';

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      date: z.date(),
      draft: z.boolean().default(false),
    }),
  }),
};
