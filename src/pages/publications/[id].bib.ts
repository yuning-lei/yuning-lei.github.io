import { getCollection } from 'astro:content';
import type { GetStaticPaths, InferGetStaticPropsType } from 'astro';
import { isPublicEntry } from '../../lib/content';
import { toBibtex } from '../../lib/bibtex';

export const getStaticPaths = (async () => {
  const entries = await getCollection('publications', isPublicEntry);
  return entries.map(entry => ({ params: { id: entry.id }, props: { entry } }));
}) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;
export function GET({ props }: { props: Props }) {
  return new Response(toBibtex(props.entry), { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } });
}
