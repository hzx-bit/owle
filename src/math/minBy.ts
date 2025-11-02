/**
 * 最小值函数 - 求数组中的最小值
 * @param array 要求最小值的数组
 * @param iteratee 迭代函数
 * @returns 最小值
 */
const minBy = (array: any[], iteratee: (item: any) => number) => {
  if (array.length === 0) {
    return null;
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (iteratee(array[i]) < iteratee(min)) {
      min = array[i];
    }
  }
  return min;
};

export default minBy;