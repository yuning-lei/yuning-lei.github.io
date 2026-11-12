import { profile } from './profile';
import type { Locale } from '../lib/i18n';

// Display translations only. Names, source links, author order and identifiers come from profile.ts.
const chinese = {
  ...profile,
  cvDate: '2026 年 11 月 12 日',
  cvDownload: '/files/yuning-lei-cv-zh.pdf',
  department: '计算机科学系', group: '微机器人与控制工程研究组（AMiR）',
  address: [...profile.address.slice(0, 2), '德国'],
  links: profile.links.map(link => ({ ...link, label: link.label === 'University profile' ? '大学主页' : link.label === 'Google Scholar' ? 'Google 学术' : link.label })),
  appointments: [
    { title: '科研人员（Research Associate）', institution: '奥尔登堡大学', location: '德国奥尔登堡', period: '2023 年 4 月—至今',
      details: ['计算机科学系，微机器人与控制工程研究组。', 'LiCoVac（真空环境下的液态金属接触角测量）科研项目负责人。', '规划和管理国际合作研究与人员交流（EU-HORIZON-MSCA、DAAD-PPP）。'] },
    { title: '研究工程师（Ingénieur d’étude）', institution: '勃艮第—弗朗什孔泰大学（Université Bourgogne Franche-Comté）', location: '法国贝桑松', period: '2022 年 10 月—2023 年 3 月', details: ['AS2M 部门。'] },
    { title: '博士研究人员（Ph.D. Fellow）', institution: 'FEMTO-ST 研究所', location: '法国贝桑松', period: '2019 年 10 月—2023 年 3 月',
      details: ['扫描电镜内光纤端部二氧化硅折纸结构的制造、机器人微装配、表征与致动。', '导师：Cédric Clévy、Jean-Yves Rauch 和 Philippe Lutz。', '参与 COLAMIR 与 DyNaBot 合作研究项目。'] },
    { title: '助教（Teaching Assistant）', institution: '弗朗什孔泰大学（University of Franche-Comté）', location: '法国贝桑松', period: '2019 年 10 月—2023 年 3 月', details: ['科学与技术学院（UFR de sciences et techniques）。'] },
    { title: '研究助理（Research Assistant）', institution: 'PRISME 实验室', location: '法国奥尔良', period: '2019 年 3 月—9 月',
      details: ['基于实验局部测量数据，利用线性化 Navier–Stokes 方程和卡尔曼滤波反馈控制，对平行湍流进行数据同化。'] },
    { title: '研究助理（Research Assistant）', institution: 'WILO Intec', location: '法国 Aubigny-sur-Nère', period: '2016 年 3 月—2017 年 9 月',
      details: ['离心泵水力测试、测量不确定度分析，以及不确定度分析工具开发。'] },
  ],
  education: [
    { title: '工程科学博士（Ph.D.）', institution: '勃艮第—弗朗什孔泰大学（Université Bourgogne Franche-Comté）', location: '法国贝桑松', period: '2019 年 10 月—2023 年 3 月',
      details: ['博士论文：Nanorobotic Origami Unfolded at the Tip of Optical Fiber（在光纤端部展开的纳米机器人折纸结构）。', '于 2023 年 3 月 24 日在贝桑松完成答辩。'] },
    { title: '机电一体化、自主系统、机器人与信号硕士（M.Sc.）', institution: '奥尔良大学（University of Orléans）', location: '法国奥尔良', period: '2017 年 9 月—2019 年 8 月',
      details: ['机器人视觉、视觉伺服、移动机器人控制、复杂系统建模与反馈控制。'] },
    { title: '环境测量专业理学学士（B.Sc.）', institution: '奥尔良大学布尔日大学技术学院（IUT de Bourges）', location: '法国布尔日', period: '2016 年 9 月—2017 年 8 月',
      details: ['环境监测、物理化学分析、色谱与谱学测量（spectrometry）。'] },
    { title: '物理测量大学技术文凭（DUT）', institution: '奥尔良大学布尔日大学技术学院（IUT de Bourges）', location: '法国布尔日', period: '2014 年 9 月—2016 年 8 月', details: [] },
    { title: '计算机科学专业一年级学习', institution: '雷恩大学拉尼永大学技术学院（IUT de Lannion）', location: '法国拉尼永', period: '2013 年 9 月—2014 年 6 月',
      details: ['完成第一年学习后，转入物理测量专业。'] },
    { title: '大学文凭（DU）——科学与技术培训预备课程', institution: '利摩日大学利摩日大学技术学院（IUT de Limoges）', location: '法国利摩日', period: '2012 年 9 月—2013 年 8 月',
      details: ['原文：Diplôme universitaire de préparation aux formations scientifiques et technologiques。'] },
  ],
  skills: [
    { title: 'SEM／FIB', description: 'Zeiss Auriga 60、Thermo Fisher APREO S、FEI Helios NanoLab、FEI Quanta 600 和 Tescan Lyra2。' },
    { title: '微纳制造', description: '光刻、物理气相沉积（PVD）、湿法刻蚀与等离子体刻蚀（RIE/DRIE）。' },
    { title: '表征技术', description: '纳米压痕、干涉测量与轮廓测量。' },
    { title: '机器人与编程', description: 'MATLAB/Simulink、LabVIEW、ROS、V-REP；C/C++、Java、Python、MATLAB 和 Visual Basic。' },
    { title: '设计与仿真', description: 'SolidWorks、Creo、AutoCAD/Inventor、Blender、Inkscape、Alphacam；COMSOL 和 ANSYS。' },
  ],
  teaching: [
    { title: '力传感（微机器人 I）', institution: '奥尔登堡大学 AMiR', period: '2024—2026 年春季', format: '讲授', workload: '1.5 小时 × 1 次' },
    { title: '扫描探针显微镜（微机器人 II）', institution: '奥尔登堡大学 AMiR', period: '2024—2026 年春季', format: '讲授', workload: '1.5 小时 × 1 次' },
    { title: '扫描电镜中的原子力显微镜（微机器人 II）', institution: '奥尔登堡大学 AMiR', period: '2024—2026 年春季', format: '讲授', workload: '1.5 小时 × 1 次' },
    { title: '自动化纳米操纵（微机器人 II）', institution: '奥尔登堡大学 AMiR', period: '2023 年春季', format: '讲授', workload: '1.5 小时 × 2 次' },
    { title: '数字控制', institution: 'MIR 硕士课程，UFR-ST', period: '2021 年及 2022 年秋季', format: '习题课', workload: '4 小时 × 5 次' },
    { title: '自动化与控制', institution: 'ISIFC，UFC', period: '2020 年及 2021 年秋季', format: '习题课', workload: '4 小时 × 8 次' },
    { title: '基于 MATLAB 与 Simulink 的伺服控制', institution: 'SAPIAA 硕士课程，UFR-ST', period: '2020 年及 2021 年秋季', format: '习题课', workload: '1.5 小时 × 4 次' },
  ],
  awards: [
    { title: 'Micron d’Or 奖', event: 'Micronora 2022 展会，Micronora 协会', period: '2022 年 9 月' },
    { title: '摄影比赛三等奖', event: 'CAZAC Day 2022，Carl Zeiss Application Community', period: '2022 年 3 月' },
    { title: '“Breakthrough in Science” 一等奖', event: 'FEMTO-ST 研究所博士生海报竞赛', period: '2020 年 7 月' },
    { title: '法国政府博士奖学金（36 个月）', event: '法国高等教育、研究与创新部', period: '2019 年 10 月—2022 年 10 月' },
  ],
  service: [
    { title: 'MARSS 学术社区', description: '宣传主席及程序委员会成员', period: '自 2020 年 11 月起' },
    { title: 'IEEE 机器人与自动化学会', description: '会员', period: '自 2021 年 2 月起' },
    { title: 'SAGIP', description: '会员', period: '自 2020 年 11 月起' },
    { title: 'GDR Robotique', description: '成员', period: '自 2017 年 9 月起' },
    { title: 'GDR MACS', description: '成员', period: '自 2020 年 11 月起' },
  ],
  languages: [
    { name: '中文', description: '母语' }, { name: '法语', description: '高级' },
    { name: '英语', description: 'B1；TOEIC 720/990（2017 年 12 月）' }, { name: '德语', description: '初级' },
  ],
  qualification: { title: '法国 CNU 第 61 学科任职资格', description: '申请法国大学副教授岗位的任职资格。', period: '2026 年 3 月' },
};

export function getProfile(locale: Locale) {
  for (const key of ['appointments', 'education', 'skills', 'teaching', 'awards', 'service', 'languages'] as const) {
    if (chinese[key].length !== profile[key].length) throw new Error(`Chinese profile coverage is incomplete: ${key}`);
  }
  return locale === 'zh' ? chinese : profile;
}

const conferenceTranslations = [
  { title: '用于系留纳米机器人的大工作空间折叠二氧化硅多关节微结构', venue: 'IEEE 国际机器人与自动化大会（ICRA 2023）', location: '英国伦敦', kind: '口头报告',
    description: '2023 年 6 月 1 日在 ExCeL London 的 Sensing and Control 分会（ThBT4.4）作口头报告，日程时间为 15:30—15:40。报告介绍了相关 2022 年 IEEE Robotics and Automation Letters 论文的研究工作。', linkLabel: '相关期刊论文' },
  { title: '锥形光纤端部集成致动器的多关节纳米机器人结构', venue: 'MARSS 2022', location: '加拿大多伦多', kind: '会议日程',
    description: '列入 2022 年 7 月 28 日 Design and Fabrication (IV) 分会的官方技术日程。', linkLabel: '官方日程（PDF）' },
  { title: '通过 FIB 铣削间隙改善微型双层悬臂梁的光热致动效果', venue: '国际光机电技术研讨会（ISOT 2021）', location: '法国贝桑松', kind: '会议日程',
    description: '官方日程安排在 2021 年 11 月 4 日 17:05，所属分会为 Emerging photonic concepts。', linkLabel: '官方日程（PDF）' },
  { title: '在光纤端部展开的纳米机器人折纸结构', venue: '机器人青年研究者日（JJCR 2021）', location: '法国巴黎', kind: '口头报告',
    description: '2021 年 10 月 12 日作口头报告，官方日程开始时间为 10:15。', linkLabel: '官方日程' },
];

export type ConferenceContribution = {
  title: string; originalTitle?: string; kind: string; venue: string; year: number; location: string;
  description: string; link: { label: string; href: string };
} & ({ authors: readonly string[]; speaker?: never } | { speaker: string; authors?: never });

export function getConferenceContributions(locale: Locale): ConferenceContribution[] {
  if (conferenceTranslations.length !== profile.conferenceContributions.length) throw new Error('Chinese conference translations must match the reviewed source records.');
  return profile.conferenceContributions.map((entry, index) => {
    if (locale === 'en') return entry;
    const translated = conferenceTranslations[index];
    return { ...entry, ...translated, originalTitle: entry.title, link: { ...entry.link, label: translated.linkLabel } };
  });
}
