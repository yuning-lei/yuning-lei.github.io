import type { CollectionEntry } from 'astro:content';

export type Activity = CollectionEntry<'news'>;

export function newestFirst(a: Activity, b: Activity) {
  return b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id);
}

export function activityDate(date: string, endDate?: string) {
  const start = new Date(`${date.length === 7 ? `${date}-01` : date}T00:00:00Z`);
  const format = (value: Date, options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'UTC' }).format(value);
  if (date.length === 7) return format(start, { month: 'long', year: 'numeric' });
  if (!endDate || date === endDate) return format(start, { day: 'numeric', month: 'long', year: 'numeric' });
  const end = new Date(`${endDate}T00:00:00Z`);
  const sameYear = date.slice(0, 4) === endDate.slice(0, 4);
  const sameMonth = date.slice(0, 7) === endDate.slice(0, 7);
  const first = format(start, { day: 'numeric', ...(sameMonth ? {} : { month: 'long' }), ...(sameYear ? {} : { year: 'numeric' }) });
  return `${first}–${format(end, { day: 'numeric', month: 'long', year: 'numeric' })}`;
}
