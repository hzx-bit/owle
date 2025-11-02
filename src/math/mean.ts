/**
 * 平均值函数 - 求数组中的平均值
 * @param array 要求平均值的数组
 * @returns 平均值
 */
const mean = (array: number[]) => {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, item) => acc + item, 0) / array.length;
};

export default mean;