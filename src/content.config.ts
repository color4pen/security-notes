import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './posts' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      description: z.string().optional(),
    }),
  }),
};
