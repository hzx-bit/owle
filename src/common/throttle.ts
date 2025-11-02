/**
 * 节流函数 - 在指定时间内最多执行一次
 * @param func 要节流的函数
 * @param wait 等待时间（毫秒）
 * @returns 节流后的函数
 */
const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastTime = 0;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    
    // 如果距离上次执行时间超过 wait，立即执行
    if (now - lastTime >= wait) {
      lastTime = now;
      func.apply(this, args);
    } else {
      // 否则设置定时器，在剩余时间后执行
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        lastTime = Date.now();
        func.apply(this, args);
        timeoutId = null;
      }, wait - (now - lastTime));
    }
  };
};

export default throttle;