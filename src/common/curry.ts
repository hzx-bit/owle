/**
 * 柯里化函数的返回类型
 */
type Curried<T> = T extends (...args: infer Args) => infer Return
  ? Args extends [infer First, ...infer Rest]
    ? (arg: First) => Curried<(...args: Rest) => Return>
    : () => Return
  : never;

/**
 * 柯里化函数 - 将一个多参数函数转换为一系列单参数函数
 * @param func 要柯里化的函数
 * @returns 柯里化后的函数
 */
const curry = <T extends (...args: any[]) => any>(
  func: T
): Curried<T> => {
  const curried = function (this: any, ...args: any[]): any {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (this: any, ...nextArgs: any[]): any {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
  return curried as Curried<T>;
};

export default curry;