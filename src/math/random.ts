/**
 * 随机数函数 - 生成指定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param isInteger 是否为整数
 * @returns 随机数
 */
const random = (min: number, max: number, isInteger: boolean = true) => {
  if (isInteger) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.random() * (max - min) + min;
};

export default random;