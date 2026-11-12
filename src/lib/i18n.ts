export type Locale = 'en' | 'zh';
export const languageTag = { en: 'en', zh: 'zh-CN' } as const;
export const openGraphLocale = { en: 'en_US', zh: 'zh_CN' } as const;

export function localeFromPath(pathname: string): Locale {
  return /^\/zh(?:\/|$)/.test(pathname) ? 'zh' : 'en';
}

/** HTML counterparts share their route and anchor; downloads and media are shared assets. */
export function localePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const url = new URL(path, 'https://ylei.de');
  let pathname = url.pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  if (/^\/(?:files|media|_astro)\//.test(pathname) || /\.(?:bib|pdf|svg|webp|xml|txt)$/.test(pathname)) return path;
  if (pathname === '/404/' || pathname === '/404.html') pathname = locale === 'zh' ? '/404/' : '/404.html';
  return `${locale === 'zh' ? '/zh' : ''}${pathname}${url.search}${url.hash}`;
}

export function tr(locale: Locale, english: string, chinese: string): string {
  return locale === 'zh' ? chinese : english;
}

export function collectionLabel(collection: string, locale: Locale): string {
  if (locale === 'en') return collection;
  return ({ research: '研究方向', projects: '研究项目', publications: '学术成果' } as Record<string, string>)[collection] ?? collection;
}

export function publicationStatusLabel(status: string, locale: Locale, isThesis = false): string {
  if (locale === 'en') return status;
  if (status === 'published') return isThesis ? '已公开' : '已发表';
  return ({ accepted: '已录用', 'under review': '审稿中', submitted: '已投稿', 'in preparation': '撰写中', unpublished: '未发表' } as Record<string, string>)[status] ?? status;
}
