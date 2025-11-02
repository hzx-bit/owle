# owle 文档站点

这是 owle 的文档站点，使用 React + Ant Design + Vite 构建。

## 项目结构

```
doc/
├── src/
│   ├── components/      # 可复用组件
│   │   ├── CodeBlock.tsx           # 代码块组件
│   │   ├── FeatureCard.tsx         # 特性卡片组件
│   │   ├── FeaturesSection.tsx      # 特性章节组件
│   │   ├── Navigation.tsx          # 导航组件
│   │   ├── SectionRenderer.tsx     # 章节渲染器
│   │   └── index.ts                # 组件导出
│   ├── config/          # 配置文件
│   │   ├── features.ts             # 特性配置
│   │   ├── sections.ts             # 章节配置
│   │   └── index.ts                # 配置导出
│   ├── types/           # 类型定义
│   │   └── config.ts                # 配置类型
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 入口文件
│   ├── index.css        # 全局样式
│   └── App.css          # 应用样式
├── dist/                # 构建输出
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 如何添加新功能

### 1. 添加新特性

编辑 `src/config/features.ts`，在 `features` 数组中添加新的特性：

```typescript
{
  icon: 'IconName',  // 可选，从 @ant-design/icons 导入的图标名
  title: '新特性',
  description: '特性描述',
}
```

然后需要在 `iconMap` 中添加对应的图标导入。

### 2. 添加新章节

编辑 `src/config/sections.ts`，在 `sections` 数组中添加新章节：

```typescript
{
  id: 'new-section',
  title: '新章节',
  level: 2,  // 标题级别：1 | 2 | 3 | 4
  description: '章节描述（可选）',
  content: '章节内容（可选）',
  examples: [  // 代码示例（可选）
    {
      language: 'typescript',
      code: '代码内容',
    },
  ],
  lists: [  // 列表项（可选）
    '列表项1',
    '列表项2',
  ],
  items: [  // 混合内容（可选）
    { type: 'text', content: '**加粗文本**' },
    { type: 'code', content: '代码内容' },
  ],
  subsections: [  // 子章节（可选）
    // 子章节配置...
  ],
}
```

### 3. 创建自定义组件

如果需要特殊的渲染方式，可以创建新的组件：

1. 在 `src/components/` 中创建新组件
2. 在 `SectionRenderer.tsx` 或 `App.tsx` 中使用新组件

### 4. 配置说明

#### Section 配置字段

- `id`: 唯一标识符，用于锚点导航
- `title`: 章节标题
- `level`: 标题级别（1-4）
- `description`: 章节描述
- `content`: 章节文本内容
- `examples`: 代码示例数组
- `lists`: 列表项数组
- `items`: 混合内容数组（支持文本和代码）
- `subsections`: 子章节数组

#### CodeExample 配置

```typescript
{
  language: 'typescript' | 'javascript' | 'bash' | 'text' | ...,
  code: '代码内容',
}
```

#### Feature 配置

```typescript
{
  icon?: string,  // 图标名称（需要在 iconMap 中注册）
  title: string,
  description: string,
}
```

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 部署

构建输出在 `dist/` 目录，可以部署到 GitHub Pages 或其他静态站点托管服务。

### GitHub Pages 部署

1. 确保 `vite.config.ts` 中的 `base` 配置正确（应该是 `/仓库名/`）
2. 构建项目：`npm run build`
3. 将 `dist/` 目录的内容推送到 `gh-pages` 分支或 GitHub Actions 自动部署

