import { Feature } from '../types/config';
import { RocketOutlined, BoxPlotOutlined, ToolOutlined, SafetyOutlined } from '@ant-design/icons';

export const features: Feature[] = [
  {
    icon: 'RocketOutlined',
    title: '轻量级',
    description: '零依赖，体积小',
  },
  {
    icon: 'BoxPlotOutlined',
    title: 'TypeScript 支持',
    description: '完整的类型定义',
  },
  {
    icon: 'ToolOutlined',
    title: '双模块格式',
    description: '同时支持 ESM 和 CommonJS',
  },
  {
    icon: 'SafetyOutlined',
    title: '类型安全',
    description: '完整的 TypeScript 类型推断',
  },
];

export const iconMap = {
  RocketOutlined,
  BoxPlotOutlined,
  ToolOutlined,
  SafetyOutlined,
};

