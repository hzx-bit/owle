import { Section } from '../../types/config';

export const mathSections: Section[] = [
  {
    id: 'sum',
    title: 'sum',
    level: 3,
    description: '求和函数 - 计算数字数组中所有元素的和。',
    examples: [
      {
        language: 'typescript',
        code: `import { sum } from 'owle';

sum([1, 2, 3, 4]); // 10
sum([10, -5, 3]); // 8
sum([]); // 0`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: number[]` - 要求和的数组' },
      { type: 'text', content: '**返回：** 所有元素的和' },
    ],
  },
  {
    id: 'mean',
    title: 'mean',
    level: 3,
    description: '平均值函数 - 计算数字数组中所有元素的平均值。',
    examples: [
      {
        language: 'typescript',
        code: `import { mean } from 'owle';

mean([1, 2, 3, 4]); // 2.5
mean([10, 20, 30]); // 20
mean([]); // 0`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: number[]` - 要求平均值的数组' },
      { type: 'text', content: '**返回：** 平均值（空数组返回 0）' },
    ],
  },
  {
    id: 'sumBy',
    title: 'sumBy',
    level: 3,
    description: '按属性求和函数 - 根据迭代函数计算数组元素的和。',
    examples: [
      {
        language: 'typescript',
        code: `import { sumBy } from 'owle';

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

// 计算所有用户年龄的总和
sumBy(users, (user) => user.age); // 90

const orders = [
  { id: 1, price: 10, quantity: 2 },
  { id: 2, price: 20, quantity: 3 },
  { id: 3, price: 15, quantity: 1 },
];

// 计算总金额
sumBy(orders, (order) => order.price * order.quantity); // 85`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: any[]` - 要求和的数组' },
      { type: 'text', content: '- `iteratee: (item: any) => number` - 迭代函数，返回要累加的值' },
      { type: 'text', content: '**返回：** 所有迭代值的和' },
    ],
  },
  {
    id: 'meanBy',
    title: 'meanBy',
    level: 3,
    description: '按属性求平均值函数 - 根据迭代函数计算数组元素的平均值。',
    examples: [
      {
        language: 'typescript',
        code: `import { meanBy } from 'owle';

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

// 计算平均年龄
meanBy(users, (user) => user.age); // 30

const scores = [
  { student: 'A', score: 85 },
  { student: 'B', score: 90 },
  { student: 'C', score: 95 },
];

// 计算平均分
meanBy(scores, (s) => s.score); // 90`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: any[]` - 要求平均值的数组' },
      { type: 'text', content: '- `iteratee: (item: any) => number` - 迭代函数，返回要计算的值' },
      { type: 'text', content: '**返回：** 平均值' },
    ],
  },
  {
    id: 'maxBy',
    title: 'maxBy',
    level: 3,
    description: '按属性求最大值函数 - 根据迭代函数返回数组中最大值对应的元素。',
    examples: [
      {
        language: 'typescript',
        code: `import { maxBy } from 'owle';

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

// 获取年龄最大的用户
maxBy(users, (user) => user.age); 
// { name: 'Charlie', age: 35 }

const products = [
  { name: 'A', price: 100 },
  { name: 'B', price: 200 },
  { name: 'C', price: 150 },
];

// 获取价格最高的产品
maxBy(products, (p) => p.price); 
// { name: 'B', price: 200 }

maxBy([], (x) => x); // null（空数组返回 null）`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: any[]` - 要查找的数组' },
      { type: 'text', content: '- `iteratee: (item: any) => number` - 迭代函数，返回用于比较的值' },
      { type: 'text', content: '**返回：** 最大值对应的元素，空数组返回 `null`' },
    ],
  },
  {
    id: 'minBy',
    title: 'minBy',
    level: 3,
    description: '按属性求最小值函数 - 根据迭代函数返回数组中最小值对应的元素。',
    examples: [
      {
        language: 'typescript',
        code: `import { minBy } from 'owle';

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

// 获取年龄最小的用户
minBy(users, (user) => user.age); 
// { name: 'Alice', age: 25 }

const products = [
  { name: 'A', price: 100 },
  { name: 'B', price: 200 },
  { name: 'C', price: 150 },
];

// 获取价格最低的产品
minBy(products, (p) => p.price); 
// { name: 'A', price: 100 }

minBy([], (x) => x); // null（空数组返回 null）`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: any[]` - 要查找的数组' },
      { type: 'text', content: '- `iteratee: (item: any) => number` - 迭代函数，返回用于比较的值' },
      { type: 'text', content: '**返回：** 最小值对应的元素，空数组返回 `null`' },
    ],
  },
  {
    id: 'div',
    title: 'div',
    level: 3,
    description: '整除函数 - 计算两个数相除的整数结果，当除数为 0 时返回 0。',
    examples: [
      {
        language: 'typescript',
        code: `import { div } from 'owle';

div(10, 3); // 3
div(20, 4); // 5
div(7, 2); // 3
div(10, 0); // 0（除数为 0 时返回 0）
div(-10, 3); // -3`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `a: number` - 被除数' },
      { type: 'text', content: '- `b: number` - 除数' },
      { type: 'text', content: '**返回：** 整除结果，当除数为 0 时返回 0' },
    ],
  },
  {
    id: 'random',
    title: 'random',
    level: 3,
    description: '随机数函数 - 生成指定范围内的随机数。',
    examples: [
      {
        language: 'typescript',
        code: `import { random } from 'owle';

// 生成 1 到 10 之间的随机整数（默认）
random(1, 10); // 可能是 1, 2, 3, ..., 10

// 生成 0 到 100 之间的随机整数
random(0, 100); // 可能是 0, 1, 2, ..., 100

// 生成随机浮点数
random(0, 1, false); // 可能是 0.123, 0.456, ..., 0.999

// 生成 1.5 到 5.5 之间的随机浮点数
random(1.5, 5.5, false); // 可能是 1.523, 2.789, ..., 5.499`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `min: number` - 最小值' },
      { type: 'text', content: '- `max: number` - 最大值' },
      { type: 'text', content: '- `isInteger?: boolean` - 是否为整数，默认为 `true`' },
      { type: 'text', content: '**返回：** 指定范围内的随机数' },
    ],
  },
];

