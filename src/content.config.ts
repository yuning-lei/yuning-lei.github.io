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
      publicationType: z.enum(['journal', 'conference', 'thesis']),
      thesisNumber: z.string().min(1).optional(),
      repository: z.object({
        name: z.literal('HAL'),
        id: z.string().min(1),
        version: z.number().int().positive(),
      }).optional(),
      volume: z.string().optional(),
      issue: z.string().optional(),
      pages: z.string().optional(),
      articleNumber: z.string().optional(),
      pdf: z.url().optional(),
      publicationStatus: z.enum(['published', 'accepted', 'under review', 'submitted', 'in preparation', 'unpublished']),
      listingApproved: z.boolean().default(false),
      doi: z.url().startsWith('https://doi.org/').optional(),
      showDoiLink: z.boolean().default(true),
      url: z.url().optional(),
    }),
  ]).superRefine((data, context) => {
    if (data.visibility === 'public' && data.publicationStatus !== 'published' && !data.listingApproved) {
      context.addIssue({ code: 'custom', path: ['listingApproved'], message: 'Owner approval is required before listing a non-published manuscript.' });
    }
  }),
});

// Month-only dates deliberately preserve the precision of the verified source.
const activityDate = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])(-\d{2})?$/).refine(value => {
  if (value.length === 7) return true;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}, 'Use a real calendar date, or YYYY-MM when the day is unconfirmed.');

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    category: z.enum(['Research visit', 'Conference', 'Milestone']),
    date: activityDate,
    endDate: activityDate.optional(),
    location: z.string().min(1),
    venue: z.string().min(1),
    featured: z.boolean().default(false),
    visibility: z.enum(['draft', 'public']),
    reviewed: z.boolean().default(false),
    sources: z.array(z.string().min(1)).default([]),
    sourceLink: z.object({ label: z.string().min(1), url: z.url() }).optional(),
    relatedLink: z.object({ label: z.string().min(1), href: z.string().regex(/^\/[a-z0-9\-/]+\/$/) }).optional(),
    mediaPermission: z.literal('owner-provided-for-website'),
    photos: z.array(z.object({
      image: image(),
      alt: z.string().min(1),
      caption: z.string().min(1),
    })).min(1),
  }).superRefine((data, context) => {
    if (data.visibility === 'public' && (!data.reviewed || data.sources.length === 0)) {
      context.addIssue({ code: 'custom', message: 'Public activities require verified sources and a review marker.' });
    }
    if (data.endDate && (data.date.length !== 10 || data.endDate.length !== 10 || data.endDate < data.date)) {
      context.addIssue({ code: 'custom', path: ['endDate'], message: 'Date ranges require full dates in chronological order.' });
    }
  }),
});

const translatedFields = z.object({
  locale: z.literal('zh'),
  title: z.string().min(1), summary: z.string().min(1), category: z.string().min(1),
  role: z.string().optional(), period: z.string().optional(),
  venue: z.string().optional(), location: z.string().optional(),
  sourceLabel: z.string().optional(), relatedLabel: z.string().optional(),
  photos: z.array(z.object({ alt: z.string().min(1), caption: z.string().min(1) })).optional(),
});
const translations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/translations' }),
  schema: z.discriminatedUnion('sourceCollection', [
    translatedFields.extend({ sourceCollection: z.literal('research'), source: reference('research') }),
    translatedFields.extend({ sourceCollection: z.literal('projects'), source: reference('projects') }),
    translatedFields.extend({ sourceCollection: z.literal('publications'), source: reference('publications') }),
    translatedFields.extend({ sourceCollection: z.literal('news'), source: reference('news') }),
  ]),
});
export const collections = { research, projects, publications, news, translations };
