import { Section } from '../../types/config';

export const arraySections: Section[] = [
  {
    id: 'sortNum',
    title: 'sortNum',
    level: 3,
    description: '排序函数 - 对数字数组进行排序。',
    examples: [
      {
        language: 'typescript',
        code: `import { sortNum } from 'owle';

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// 升序排序（默认）
sortNum(numbers, true); // [1, 1, 2, 3, 4, 5, 6, 9]

// 降序排序
sortNum(numbers, false); // [9, 6, 5, 4, 3, 2, 1, 1]

// 默认升序
sortNum([5, 2, 8, 1]); // [1, 2, 5, 8]`,
      },
    ],
    items: [
      { type: 'text', content: '**参数：**' },
      { type: 'text', content: '- `array: number[]` - 要排序的数组' },
      { type: 'text', content: '- `ascending?: boolean` - 是否升序，默认为 `true`' },
      { type: 'text', content: '**返回：** 排序后的数组（会修改原数组）' },
    ],
  },
];

