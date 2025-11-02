import { Section } from '../types/config';
import { funcSections } from './func';
import { arraySections } from './array';
import { languageSections } from './language';
import { mathSections } from './math';

export const sections: Section[] = [
  {
    id: 'features',
    title: '特性',
    level: 2,
  },
  {
    id: 'install',
    title: '安装',
    level: 2,
    examples: [
      {
        language: 'bash',
        code: 'npm install owle',
      },
    ],
  },
  {
    id: 'usage',
    title: '使用',
    level: 2,
    subsections: [
      ...funcSections,
      ...arraySections,
      ...languageSections,
      ...mathSections,
    ],
  },
  {
    id: 'module',
    title: '模块格式',
    level: 2,
    subsections: [
      {
        id: 'esm',
        title: 'ESM (推荐)',
        level: 4,
        examples: [
          {
            language: 'typescript',
            code: `import { 
  // 函数工具
  debounce, throttle, curry, memoize,
  // 数组工具
  sortNum,
  // 语言工具
  deepClone, shallowClone,
  // 数学工具
  sum, mean, sumBy, meanBy, maxBy, minBy, div, random
} from 'owle';`,
          },
        ],
      },
      {
        id: 'commonjs',
        title: 'CommonJS',
        level: 4,
        examples: [
          {
            language: 'javascript',
            code: `const { 
  // 函数工具
  debounce, throttle, curry, memoize,
  // 数组工具
  sortNum,
  // 语言工具
  deepClone, shallowClone,
  // 数学工具
  sum, mean, sumBy, meanBy, maxBy, minBy, div, random
} = require('owle');`,
          },
        ],
      },
    ],
  },
  {
    id: 'development',
    title: '开发',
    level: 2,
    examples: [
      {
        language: 'bash',
        code: `# 安装依赖
npm install

# 构建
npm run build

# 运行测试
npm test

# 清理构建文件
npm run clean`,
      },
    ],
    subsections: [
      {
        id: 'code-style',
        title: '代码风格',
        level: 4,
        lists: [
          '使用 TypeScript 编写，遵循严格的类型检查',
          '使用 2 空格缩进',
          '使用单引号',
          '函数和变量使用驼峰命名法',
          '导出的函数需要添加 JSDoc 注释',
        ],
      },
      {
        id: 'file-structure',
        title: '文件结构',
        level: 4,
        examples: [
          {
            language: 'text',
            code: `src/
  ├── func/            # 函数工具（debounce, throttle, curry, memoize）
  ├── array/           # 数组工具（sortNum）
  ├── language/        # 语言工具（deepClone, shallowClone）
  ├── math/            # 数学工具（sum, mean, sumBy, meanBy, maxBy, minBy, div, random）
  ├── object/          # 对象工具
  ├── set/             # 集合工具
  └── index.ts         # 入口文件
test/                  # 测试文件`,
          },
        ],
      },
      {
        id: 'commit-style',
        title: '提交规范',
        level: 4,
        content: '提交信息使用简洁的中文描述即可，例如：',
        lists: [
          '`feat: 添加新功能`',
          '`fix: 修复问题`',
          '`docs: 更新文档`',
          '`refactor: 重构代码`',
        ],
      },
      {
        id: 'testing',
        title: '测试',
        level: 4,
        lists: ['新增功能需要编写对应的测试用例', '运行 `npm test` 确保所有测试通过'],
      },
    ],
  },
  {
    id: 'types',
    title: '类型定义',
    level: 2,
    content:
      '该项目完全使用 TypeScript 编写，提供了完整的类型定义。TypeScript 会自动推断函数的类型，提供完整的类型安全。',
  },
  {
    id: 'license',
    title: '许可证',
    level: 2,
    content: 'ISC',
  },
  {
    id: 'author',
    title: '作者',
    level: 2,
    content: 'zhixin huang',
  },
];

