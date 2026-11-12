import { getCollection } from 'astro:content';
import { isPublicEntry } from './content';

/** One source of detail-page routes for both languages. */
export async function detailPaths() {
  const collections = ['research', 'projects', 'publications'] as const;
  return (await Promise.all(collections.map(async collection => {
    return (await getCollection(collection, isPublicEntry)).map(entry => ({ params: { collection, id: entry.id }, props: { entry, collection } }));
  }))).flat();
}
