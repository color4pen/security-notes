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
      // 国内（社会面）か海外（国際面）か。未指定は海外として扱う。
      region: z.enum(['domestic', 'overseas']).default('overseas'),
      // 国内記事向け：続報待ち（ongoing）か、確定（concluded）か。
      status: z.enum(['ongoing', 'concluded']).optional(),
      // 続報を追跡するGitHub Issue番号（任意）。
      issue: z.number().int().positive().optional(),
    }),
  }),
};
