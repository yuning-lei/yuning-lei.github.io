/** A local draft must never become a public listing or generated detail route. */
export function isPublicEntry({ data }: { data: { visibility: 'draft' | 'public' } }) {
  return data.visibility === 'public';
}
