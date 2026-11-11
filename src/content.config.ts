import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entry = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  order: z.number().int().default(0),
  featured: z.boolean().default(false),
});

const draft = entry.extend({
  visibility: z.literal('draft'),
  sources: z.array(z.string().min(1)).default([]),
});

const publicEntry = entry.extend({
  visibility: z.literal('public'),
  reviewed: z.literal(true),
  sources: z.array(z.string().min(1)).min(1),
  role: z.string().optional(),
  period: z.string().optional(),
  relatedPublications: z.array(reference('publications')).default([]),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.discriminatedUnion('visibility', [draft, publicEntry]),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.discriminatedUnion('visibility', [draft, publicEntry]),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.discriminatedUnion('visibility', [
    draft,
    publicEntry.extend({
      authors: z.array(z.string().min(1)).min(1),
      year: z.number().int().min(1900).max(2100),
      venue: z.string().min(1),
      publicationType: z.enum(['journal', 'conference']),
      volume: z.string().optional(),
      issue: z.string().optional(),
      pages: z.string().optional(),
      articleNumber: z.string().optional(),
      pdf: z.url().optional(),
      publicationStatus: z.enum(['published', 'accepted', 'under review', 'submitted', 'in preparation', 'unpublished']),
      listingApproved: z.boolean().default(false),
      doi: z.url().startsWith('https://doi.org/').optional(),
      url: z.url().optional(),
    }),
  ]).superRefine((data, context) => {
    if (data.visibility === 'public' && data.publicationStatus !== 'published' && !data.listingApproved) {
      context.addIssue({ code: 'custom', path: ['listingApproved'], message: 'Owner approval is required before listing a non-published manuscript.' });
    }
  }),
});

export const collections = { research, projects, publications };
