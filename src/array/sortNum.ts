/**
 * 排序函数 - 排序一个数组
 * @param array 要排序的数组
 * @param ascending 是否升序，默认为 true
 * @returns 排序后的数组
 */
const sortNum = (array: number[], ascending: boolean = true) => {
  return array.sort((a, b) => ascending ? a - b : b - a);
};

export default sortNum;