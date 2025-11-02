import sumBy from "./sumBy";

/**
 * 平均值函数 - 求数组中的平均值
 * @param array 要求平均值的数组
 * @param iteratee 迭代函数
 * @returns 平均值
 */
const meanBy = (array: any[], iteratee: (item: any) => number) => {
  return sumBy(array, iteratee) / array.length;
};

export default meanBy;