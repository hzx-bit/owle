/**
 * 缓存结果函数 - 首次调用不使用缓存，后续调用根据判断函数决定是否使用缓存
 * @param func 需要缓存结果的函数
 * @param shouldUseCache 判断是否需要使用之前的缓存结果的函数
 * @returns 缓存后的函数
 */
const memoize = <T extends (...args: any[]) => any>(
  func: T,
  shouldUseCache?: (
    newArgs: Parameters<T>,
    cachedArgs?: Parameters<T>,
    cachedResult?: ReturnType<T>
  ) => boolean
): ((...args: Parameters<T>) => ReturnType<T>) => {
  let cachedResult: ReturnType<T> | undefined;
  let cachedArgs: Parameters<T> | undefined;
  let isFirstCall = true;

  return function (this: any, ...args: Parameters<T>): ReturnType<T> {
    // 首次调用，不使用缓存，执行函数并缓存结果
    if (isFirstCall) {
      isFirstCall = false;
      const result = func.apply(this, args);
      cachedResult = result;
      cachedArgs = args;
      return result;
    }

    // 后续调用，如果提供了判断函数，则使用它来决定是否使用缓存
    if (shouldUseCache) {
      if (shouldUseCache(args, cachedArgs, cachedResult)) {
        // 此时 cachedResult 一定存在（因为首次调用已设置）
        return cachedResult as ReturnType<T>;
      }
    } else {
      // 如果没有提供判断函数，默认使用缓存
      // 此时 cachedResult 一定存在（因为首次调用已设置）
      return cachedResult as ReturnType<T>;
    }

    // 不使用缓存，执行函数并更新缓存
    const result = func.apply(this, args);
    cachedResult = result;
    cachedArgs = args;
    return result;
  };
};

export default memoize;

