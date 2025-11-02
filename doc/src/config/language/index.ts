import { Section } from '../../types/config';

export const languageSections: Section[] = [
  {
    id: 'deepClone',
    title: 'deepClone',
    level: 3,
    description: '深拷贝函数 - 深拷贝一个对象，支持多种数据类型和循环引用。',
    examples: [
      {
        language: 'typescript',
        code: `import { deepClone } from 'owle';

// 基本对象深拷贝
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
cloned.b.c = 3;
console.log(obj.b.c); // 2（原对象未改变）

// 数组深拷贝
const arr = [1, [2, 3], { a: 4 }];
const clonedArr = deepClone(arr);
clonedArr[1][0] = 99;
console.log(arr[1][0]); // 2（原数组未改变）

// 支持 Date、RegExp、Map、Set 等
const date = new Date();
const clonedDate = deepClone(date);

const map = new Map([['key', 'value']]);
const clonedMap = deepClone(map);

// 处理循环引用
const circular: any = { a: 1 };
circular.self = circular;
const clonedCircular = deepClone(circular); // 不会栈溢出`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `obj: any` - 要克隆的对象' },
      { type: 'text', content: '**返回：** 克隆后的对象' },
      { type: 'text', content: '**支持的类型：**' },
      { type: 'text', content: '- 基础类型（string, number, boolean, symbol, bigint）' },
      { type: 'text', content: '- null 和 undefined' },
      { type: 'text', content: '- Date、RegExp' },
      { type: 'text', content: '- Array、普通对象' },
      { type: 'text', content: '- Map、Set' },
      { type: 'text', content: '- 循环引用' },
    ],
  },
  {
    id: 'shallowClone',
    title: 'shallowClone',
    level: 3,
    description: '浅拷贝函数 - 浅拷贝一个对象。',
    examples: [
      {
        language: 'typescript',
        code: `import { shallowClone } from 'owle';

const obj = { a: 1, b: { c: 2 } };
const cloned = shallowClone(obj);
cloned.a = 99;
cloned.b.c = 99;

console.log(obj.a); // 1（原对象未改变）
console.log(obj.b.c); // 99（嵌套对象被改变）`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `obj: any` - 要克隆的对象' },
      { type: 'text', content: '**返回：** 浅拷贝后的对象' },
      { type: 'text', content: '**注意：** 只会复制对象的第一层属性，嵌套对象是引用关系' },
    ],
  },
];

