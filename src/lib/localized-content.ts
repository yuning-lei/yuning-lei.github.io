import { getCollection, type CollectionEntry } from 'astro:content';
import { isPublicEntry } from './content';
import type { Locale } from './i18n';

export type SourceCollection = 'research' | 'projects' | 'publications' | 'news';
export type DisplayFields = {
  title: string; summary: string; category: string;
  role?: string; period?: string; venue?: string; location?: string;
  sourceLabel?: string; relatedLabel?: string;
  photos?: { alt: string; caption: string }[];
};
export type LocalizedEntry<C extends SourceCollection = SourceCollection> = CollectionEntry<C> & {
  view: DisplayFields; translation?: CollectionEntry<'translations'>;
};
export type DetailEntry = LocalizedEntry<'research' | 'projects' | 'publications'>;

let translationIndex: Promise<Map<string, CollectionEntry<'translations'>>> | undefined;
function translations() {
  return translationIndex ??= getCollection('translations').then(entries => {
    const index = new Map<string, CollectionEntry<'translations'>>();
    for (const entry of entries) {
      const key = `${entry.data.source.collection}/${entry.data.source.id}`;
      if (entry.id !== key || index.has(key)) throw new Error(`Invalid or duplicate Chinese translation: ${entry.id}`);
      index.set(key, entry);
    }
    return index;
  });
}

/** Translated display copy is separate from authoritative scholarly metadata. */
export async function localizeEntry<C extends SourceCollection>(entry: CollectionEntry<C>, locale: Locale): Promise<LocalizedEntry<C>> {
  const data = entry.data;
  const base: DisplayFields = {
    title: data.title, summary: data.summary, category: data.category,
    role: 'role' in data ? data.role : undefined,
    period: 'period' in data ? data.period : undefined,
    venue: 'venue' in data ? data.venue : undefined,
    location: 'location' in data ? data.location : undefined,
    sourceLabel: 'sourceLink' in data ? data.sourceLink?.label : undefined,
    relatedLabel: 'relatedLink' in data ? data.relatedLink?.label : undefined,
    photos: 'photos' in data ? data.photos.map(({ alt, caption }) => ({ alt, caption })) : undefined,
  };
  if (locale === 'en') return { ...entry, view: base };
  if (data.visibility !== 'public') throw new Error(`A draft cannot be translated for publication: ${entry.id}`);
  const translation = (await translations()).get(`${entry.collection}/${entry.id}`);
  if (!translation) throw new Error(`Missing Chinese translation: ${entry.collection}/${entry.id}`);
  if ('photos' in data && translation.data.photos?.length !== data.photos.length) throw new Error(`Chinese photo captions do not match the original gallery: ${entry.id}`);
  const { title, summary, category, role, period, venue, location, sourceLabel, relatedLabel, photos } = translation.data;
  return { ...entry, translation, view: { ...base, title, summary, category, role: role ?? base.role, period: period ?? base.period, venue: venue ?? base.venue, location: location ?? base.location, sourceLabel: sourceLabel ?? base.sourceLabel, relatedLabel: relatedLabel ?? base.relatedLabel, photos: photos ?? base.photos } };
}

export async function localizedCollection<C extends SourceCollection>(collection: C, locale: Locale): Promise<LocalizedEntry<C>[]> {
  return Promise.all((await getCollection(collection, isPublicEntry)).map(entry => localizeEntry(entry, locale)));
}
