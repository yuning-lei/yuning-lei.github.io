import type { LocalizedEntry } from './localized-content';
import type { Locale } from './i18n';

export type Activity = LocalizedEntry<'news'>;

export function newestFirst(a: Activity, b: Activity) {
  return b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id);
}

export function activityDate(date: string, endDate?: string, locale: Locale = 'en') {
  if (locale === 'zh') {
    const [year, month, day] = date.split('-');
    const first = `${year} 年 ${Number(month)} 月${day ? ` ${Number(day)} 日` : ''}`;
    if (!endDate || date === endDate) return first;
    const [endYear, endMonth, endDay] = endDate.split('-');
    return `${first}—${endYear === year ? '' : `${endYear} 年 `}${endMonth === month && endYear === year ? '' : `${Number(endMonth)} 月 `}${Number(endDay)} 日`;
  }
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
