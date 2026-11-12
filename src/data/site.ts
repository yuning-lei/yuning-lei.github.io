import type { Locale } from '../lib/i18n';

export const chineseName = '雷宇宁';

export function localizeOwnerName(name: string, locale: Locale): string {
  return locale === 'zh' && (name === 'Yuning Lei' || name === 'Y. Lei') ? chineseName : name;
}

export const site = {
  name: 'Yuning Lei',
  qualification: 'Ph.D.',
  role: 'Research Associate',
  institution: 'University of Oldenburg',
  location: 'Oldenburg, Germany',
  description: 'Yuning Lei, Ph.D., Research Associate at the University of Oldenburg, Germany. Research in microrobotics, nanorobotics, SEM-based nanomanipulation, micro/nanofabrication and microactuation.',
};

export function getSite(locale: Locale) {
  return locale === 'zh' ? { ...site,
    name: chineseName,
    qualification: '博士', role: '科研人员（Research Associate）',
    institution: '奥尔登堡大学', location: '德国奥尔登堡',
    description: '雷宇宁，博士，德国奥尔登堡大学科研人员。研究方向包括微机器人、纳米机器人、扫描电子显微镜下的纳米操纵、微纳制造与微致动。',
  } : site;
}

export const navigation = [
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;
