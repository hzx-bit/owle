import { Section } from '../../types/config';

export const funcSections: Section[] = [
  {
    id: 'debounce',
    title: 'debounce',
    level: 3,
    description: '防抖函数 - 在指定时间内只执行最后一次调用。',
    examples: [
      {
        language: 'typescript',
        code: `import { debounce } from 'owle';

// 防抖搜索函数
const search = debounce((keyword: string) => {
  console.log('搜索:', keyword);
}, 300);

search('a'); // 不会执行
search('ab'); // 不会执行
search('abc'); // 300ms 后执行：搜索: abc`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `func: T` - 要防抖的函数' },
      { type: 'text', content: '- `wait: number` - 等待时间（毫秒）' },
      { type: 'text', content: '**返回：** 防抖后的函数' },
    ],
  },
  {
    id: 'throttle',
    title: 'throttle',
    level: 3,
    description: '节流函数 - 在指定时间内最多执行一次。',
    examples: [
      {
        language: 'typescript',
        code: `import { throttle } from 'owle';

// 节流滚动处理函数
const handleScroll = throttle(() => {
  console.log('滚动事件');
}, 200);

// 频繁滚动时，每 200ms 最多执行一次
window.addEventListener('scroll', handleScroll);`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `func: T` - 要节流的函数' },
      { type: 'text', content: '- `wait: number` - 等待时间（毫秒）' },
      { type: 'text', content: '**返回：** 节流后的函数' },
    ],
  },
  {
    id: 'curry',
    title: 'curry',
    level: 3,
    description: '柯里化函数 - 将一个多参数函数转换为一系列单参数函数。',
    examples: [
      {
        language: 'typescript',
        code: `import { curry } from 'owle';

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
addOneTwo(3); // 6`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `func: T` - 要柯里化的函数' },
      { type: 'text', content: '**返回：** 柯里化后的函数' },
    ],
  },
  {
    id: 'memoize',
    title: 'memoize',
    level: 3,
    description: '缓存结果函数 - 首次调用不使用缓存，后续调用根据判断函数决定是否使用缓存。',
    examples: [
      {
        language: 'typescript',
        code: `import { memoize } from 'owle';

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
);`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `func: T` - 需要缓存结果的函数' },
      {
        type: 'text',
        content:
          '- `shouldUseCache?: (newArgs, cachedArgs?, cachedResult?) => boolean` - 判断是否需要使用之前的缓存结果的函数（可选）',
      },
      { type: 'text', content: '  - `newArgs` - 新调用的参数' },
      { type: 'text', content: '  - `cachedArgs` - 缓存的参数（可选）' },
      { type: 'text', content: '  - `cachedResult` - 缓存的结果（可选）' },
      { type: 'text', content: '**返回：** 缓存后的函数' },
      { type: 'text', content: '**特性：**' },
      { type: 'text', content: '- 首次调用总是执行函数并缓存结果' },
      {
        type: 'text',
        content: '- 如果提供了判断函数，后续调用根据判断函数决定是否使用缓存',
      },
      { type: 'text', content: '- 如果没有提供判断函数，后续调用默认使用缓存' },
    ],
  },
];

