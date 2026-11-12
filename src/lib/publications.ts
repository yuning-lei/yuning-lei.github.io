import type { CollectionEntry } from 'astro:content';

/** Prefer a reviewed repository URL when a catalogue/DOI link is unavailable. */
export function publicationReadingUrl(data: CollectionEntry<'publications'>['data']) {
  if (data.visibility !== 'public') return undefined;
  if (data.repository || !data.showDoiLink) return data.url;
  return data.doi ?? data.url;
}
