/**
 * 求和函数 - 求和数组中的元素
 * @param array 要求和的数组
 * @param iteratee 迭代函数
 * @returns 求和结果
 */
const sumBy = (array: any[], iteratee: (item: any) => number) => {
  return array.reduce((acc, item) => acc + iteratee(item), 0);
};

export default sumBy;