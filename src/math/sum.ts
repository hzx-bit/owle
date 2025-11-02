/**
 * 求和函数 - 求数组中的元素之和
 * @param array 要求和的数组
 * @returns 和
 */
const sum = (array: number[]) => {
  return array.reduce((acc, item) => acc + item, 0);
};

export default sum;