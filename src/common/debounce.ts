/**
 * 防抖函数 - 在指定时间内只执行最后一次调用
 * @param func 要防抖的函数
 * @param wait 等待时间（毫秒）
 * @returns 防抖后的函数
 */
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    // 清除之前的定时器
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // 设置新的定时器
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, wait);
  };
};

export default debounce;
