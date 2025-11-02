/**
 * 整除函数 - 求两个数相除的整数结果，当除数为 0 时返回 0
 * @param a 被除数
 * @param b 除数
 * @returns 整除结果，当除数为 0 时返回 0
 */
const div = (a: number, b: number) => {
  if (b === 0) {
    return 0;
  }
  return Math.trunc(a / b);
};

export default div;