import { PageConfig } from '../types/config';
import { features } from './features';
import { sections } from './sections';

export const pageConfig: PageConfig = {
  title: 'owle',
  description: '一个轻量级的 JavaScript/TypeScript 工具函数库，提供前端开发常用的功能函数。',
  features,
  sections,
};

export * from './features';
export * from './sections';

