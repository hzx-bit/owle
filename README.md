# owle

一个轻量级的 JavaScript/TypeScript 工具函数库，提供防抖、节流、柯里化和缓存结果等常用功能函数。

## 特性

- 🚀 **轻量级** - 零依赖，体积小
- 📦 **TypeScript 支持** - 完整的类型定义
- 🔧 **双模块格式** - 同时支持 ESM 和 CommonJS
- 💪 **类型安全** - 完整的 TypeScript 类型推断

## 安装

```bash
npm install owle
```

## 功能

- [debounce](#debounce) - 防抖函数
- [throttle](#throttle) - 节流函数
- [curry](#curry) - 柯里化函数
- [memoize](#memoize) - 缓存结果函数

## 使用

### debounce

防抖函数 - 在指定时间内只执行最后一次调用。

```typescript
import { debounce } from 'owle';

// 防抖搜索函数
const search = debounce((keyword: string) => {
  console.log('搜索:', keyword);
}, 300);

search('a'); // 不会执行
search('ab'); // 不会执行
search('abc'); // 300ms 后执行：搜索: abc
```

**参数：**
- `func: T` - 要防抖的函数
- `wait: number` - 等待时间（毫秒）

**返回：** 防抖后的函数

### throttle

节流函数 - 在指定时间内最多执行一次。

```typescript
import { throttle } from 'owle';

// 节流滚动处理函数
const handleScroll = throttle(() => {
  console.log('滚动事件');
}, 200);

// 频繁滚动时，每 200ms 最多执行一次
window.addEventListener('scroll', handleScroll);
```

**参数：**
- `func: T` - 要节流的函数
- `wait: number` - 等待时间（毫秒）

**返回：** 节流后的函数

### curry

柯里化函数 - 将一个多参数函数转换为一系列单参数函数。

```typescript
import { curry } from 'owle';

// 原始函数
const add = (a: number, b: number, c: number) => a + b + c;

// 柯里化
const curriedAdd = curry(add);

// 多种调用方式
curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2, 3); // 6
curriedAdd(1, 2, 3); // 6

// 创建部分应用的函数
const addOne = curriedAdd(1);
const addOneTwo = addOne(2);
addOneTwo(3); // 6
```

**参数：**
- `func: T` - 要柯里化的函数

**返回：** 柯里化后的函数

### memoize

缓存结果函数 - 首次调用不使用缓存，后续调用根据判断函数决定是否使用缓存。

```typescript
import { memoize } from 'owle';

// 基本用法：默认使用缓存
const expensiveFn = memoize((x: number) => {
  console.log('执行计算');
  return x * 2;
});

expensiveFn(5); // 执行计算，返回 10
expensiveFn(5); // 使用缓存，返回 10（不执行计算）

// 使用判断函数：根据参数决定是否使用缓存
const memoizedFn = memoize(
  (x: number) => {
    console.log('执行计算');
    return x * 2;
  },
  // 判断函数：参数相同时使用缓存
  (newArgs, cachedArgs) => {
    return cachedArgs !== undefined && newArgs[0] === cachedArgs[0];
  }
);

memoizedFn(5); // 执行计算，返回 10
memoizedFn(5); // 使用缓存，返回 10
memoizedFn(10); // 执行计算，返回 20
memoizedFn(10); // 使用缓存，返回 20

// 判断函数可以省略参数
const smartMemoized = memoize(
  (x: number) => x * 2,
  // 只使用缓存结果判断
  (_newArgs, _cachedArgs, cachedResult) => {
    return cachedResult !== undefined && cachedResult % 2 === 0;
  }
);
```

**参数：**
- `func: T` - 需要缓存结果的函数
- `shouldUseCache?: (newArgs, cachedArgs?, cachedResult?) => boolean` - 判断是否需要使用之前的缓存结果的函数（可选）
  - `newArgs` - 新调用的参数
  - `cachedArgs` - 缓存的参数（可选）
  - `cachedResult` - 缓存的结果（可选）

**返回：** 缓存后的函数

**特性：**
- 首次调用总是执行函数并缓存结果
- 如果提供了判断函数，后续调用根据判断函数决定是否使用缓存
- 如果没有提供判断函数，后续调用默认使用缓存

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

## 开发规范

### 代码风格

- 使用 TypeScript 编写，遵循严格的类型检查
- 使用 2 空格缩进
- 使用单引号
- 函数和变量使用驼峰命名法
- 导出的函数需要添加 JSDoc 注释

### 文件结构

```
src/
  ├── common/          # 通用工具函数
  ├── index.ts         # 入口文件
test/                  # 测试文件
```

### 提交规范

提交信息使用简洁的中文描述即可，例如：

- `feat: 添加新功能`
- `fix: 修复问题`
- `docs: 更新文档`
- `refactor: 重构代码`

### 测试

- 新增功能需要编写对应的测试用例
- 运行 `npm test` 确保所有测试通过

## 类型定义

该项目完全使用 TypeScript 编写，提供了完整的类型定义。TypeScript 会自动推断函数的类型，提供完整的类型安全。

## 许可证

ISC

## 作者

zhixin huang

