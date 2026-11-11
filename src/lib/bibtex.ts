import type { CollectionEntry } from 'astro:content';

/** Generate a real citation file from reviewed metadata without fetching a paper. */
export function toBibtex(entry: CollectionEntry<'publications'>) {
  if (entry.data.visibility !== 'public') throw new Error('Cannot export a draft citation.');
  const data = entry.data;
  const escape = (value: string) => value.replace(/\\/g, '\\textbackslash{}').replace(/([&%_#])/g, '\\$1');
  const fields: [string, string | undefined][] = [
    ['title', `{${data.title}}`],
    ['author', data.authors.join(' and ')],
    [data.publicationType === 'conference' ? 'booktitle' : 'journal', data.venue],
    ['year', String(data.year)],
    ['volume', data.volume],
    ['number', data.issue],
    ['pages', data.pages?.replace(/[–—]/g, '--')],
    ['eid', data.articleNumber],
    ['doi', data.doi?.replace('https://doi.org/', '')],
    ['url', data.doi ?? data.url],
    ['note', data.publicationStatus !== 'published' ? data.publicationStatus : undefined],
  ];
  return `@${data.publicationType === 'conference' ? 'inproceedings' : 'article'}{${entry.id},\n${fields.filter(([, value]) => value).map(([key, value]) => `  ${key} = {${escape(value!)}},`).join('\n')}\n}\n`;
}
