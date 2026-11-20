import silicaOrigami from '../assets/featured/silica-origami-20um.webp';
import galinstan from '../assets/featured/galinstan-manipulation.png';
import semKinematics from '../assets/featured/sem-kinematics.webp';
import optothermalActuator from '../assets/featured/optothermal-microactuator.webp';
import fiberButterfly from '../assets/featured/fiber-butterfly.webp';

/** Owner-supplied Teaser.svg and description, approved for website use on 12 November 2026. */
export const featuredWork = {
  title: 'Laser-actuated silica origami',
  description: 'A sub-50 µm silica origami structure mounted on a tapered optical fiber.',
  scale: 'sub-50 µm',
  context: 'Human hair shown for comparison. Scale bar: 20 µm.',
  credit: 'Figure supplied by Yuning Lei',
  alt: 'Annotated research image of a silica origami structure at the tip of a tapered optical fiber, beside a human hair. The original 20 µm scale bar is visible at the lower right.',
  original: '/media/silica-origami-teaser.svg',
  image: '/media/silica-origami-teaser-800.webp',
  srcset: '/media/silica-origami-teaser-480.webp 480w, /media/silica-origami-teaser-800.webp 800w, /media/silica-origami-teaser-1200.webp 1200w',
  sourceId: 'owner-teaser-2026-11-12',
} as const;

/** Owner-supplied images and descriptions, 20 November 2026. See docs/content-provenance.md. */
export const featuredImages = [
  {
    image: silicaOrigami,
    title: 'Sub-20 µm polyarticulated silica origami',
    titleZh: '小于 20 µm 的多关节二氧化硅折纸结构',
    caption: 'A polyarticulated silica origami structure smaller than 20 µm, imaged by SEM. The original 20 µm scale bar is preserved.',
    captionZh: '小于 20 µm 的多关节二氧化硅折纸结构的扫描电镜图像，保留原图的 20 µm 比例尺。',
    alt: 'SEM image of a folded, polyarticulated silica structure, with instrument annotations and a 20 µm scale bar.',
    altZh: '折叠多关节二氧化硅结构的扫描电镜图像，保留仪器标注与 20 µm 比例尺。',
  },
  {
    image: galinstan,
    title: 'Manipulating Galinstan microdroplets in SEM',
    titleZh: 'SEM 内的 Galinstan 微液滴操纵',
    caption: 'Manipulation of a Galinstan liquid-metal droplet a few micrometres in size inside an SEM. The original scale bar is 5 µm.',
    captionZh: '在扫描电镜内部操纵几微米大小的 Galinstan 液态金属液滴，原图比例尺为 5 µm。',
    alt: 'SEM image of a spherical Galinstan droplet at a manipulation tool tip, with a 5 µm scale bar.',
    altZh: '操纵工具尖端的球形 Galinstan 液滴扫描电镜图像，保留 5 µm 比例尺。',
  },
  {
    image: semKinematics,
    title: 'Nanorobot kinematics inside an SEM',
    titleZh: 'SEM 内的纳米机器人运动学实验',
    caption: 'The experimental setup for nanorobot kinematics inside a scanning electron microscope.',
    captionZh: '扫描电子显微镜内部用于纳米机器人运动学实验的装置。',
    alt: 'Photograph of the SEM chamber containing positioning stages, manipulation tools and experiment wiring.',
    altZh: '扫描电镜腔室内部的实验装置照片，可见定位平台、操纵工具与连接线。',
  },
  {
    image: optothermalActuator,
    title: 'Laser-driven optothermal microactuator',
    titleZh: '激光光热致动的微型致动器',
    caption: 'A microactuator driven by laser-induced optothermal actuation.',
    captionZh: '通过激光光热效应驱动的微型致动器。',
    alt: 'Experimental image of a microactuator illuminated by a red laser spot.',
    altZh: '红色激光光斑照射微型致动器的实验图像。',
  },
  {
    image: fiberButterfly,
    title: 'Butterfly at the fiber tip',
    titleZh: '光纤顶端的蝴蝶',
    caption: 'Charging distorts the SEM image around the optical fiber end face into butterfly-like wings. This image received Third Prize in the CAZAC Day 2022 SEM Photography Competition. The original scale bar is 10 µm.',
    captionZh: '荷电效应使光纤端面周围的扫描电镜图像发生扭曲，形成蝴蝶翅膀般的影像。该图像获得 CAZAC Day 2022 扫描电镜摄影比赛三等奖。原图比例尺为 10 µm。',
    alt: 'SEM image with butterfly-like charging distortions around an optical fiber end face, with a 10 µm scale bar.',
    altZh: '光纤端面周围因荷电效应形成蝴蝶翅膀般扭曲影像的扫描电镜图，保留 10 µm 比例尺。',
  },
] as const;
