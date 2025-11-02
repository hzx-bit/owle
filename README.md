# owle

一个轻量级的 JavaScript/TypeScript 工具函数库，提供前端开发常用的功能函数。

📖 **[在线文档](https://hzx-bit.github.io/owle/)** | 📦 [npm](https://www.npmjs.com/package/owle) | 🐛 [Issues](https://github.com/hzx-bit/owle/issues)

## 特性

- 🚀 **轻量级** - 零依赖，体积小
- 📦 **TypeScript 支持** - 完整的类型定义
- 🔧 **双模块格式** - 同时支持 ESM 和 CommonJS
- 💪 **类型安全** - 完整的 TypeScript 类型推断

## 安装

```bash
npm install owle
```

## 快速开始

```typescript
import { debounce, throttle, curry, memoize } from 'owle';

// 防抖函数
const search = debounce((keyword: string) => {
  console.log('搜索:', keyword);
}, 300);

// 节流函数
const handleScroll = throttle(() => {
  console.log('滚动事件');
}, 200);

```

## 文档

完整的使用文档、API 参考和示例，请访问：

🔗 **[https://hzx-bit.github.io/owle/](https://hzx-bit.github.io/owle/)**

文档站点包含：
- 详细的使用说明
- 完整的 API 文档
- 丰富的代码示例
- 最佳实践指南

## 模块格式

### ESM (推荐)

```typescript
import { debounce, throttle, curry, memoize } from 'owle';
```

### CommonJS

```javascript
const { debounce, throttle, curry, memoize } = require('owle');
```

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 运行测试
npm test

# 清理构建文件
npm run clean
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

ISC

## 作者

zhixin huang
