/**
 * 深拷贝函数 - 深拷贝一个对象，支持多种数据类型和循环引用
 * @param obj 要克隆的对象
 * @returns 克隆后的对象
 */
const deepClone = (obj: any, visited = new WeakMap()): any => {
  // 处理 null 和 undefined
  if (obj === null || obj === undefined) {
    return obj;
  }

  // 处理基础类型（string, number, boolean, symbol, bigint）
  if (typeof obj !== 'object') {
    return obj;
  }

  // 处理循环引用
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // 处理 Date
  if (obj instanceof Date) {
    const cloned = new Date(obj.getTime());
    visited.set(obj, cloned);
    return cloned;
  }

  // 处理 RegExp
  if (obj instanceof RegExp) {
    const cloned = new RegExp(obj);
    visited.set(obj, cloned);
    return cloned;
  }

  // 处理 Array
  if (Array.isArray(obj)) {
    const cloned: any[] = [];
    visited.set(obj, cloned);
    obj.forEach((item, index) => {
      cloned[index] = deepClone(item, visited);
    });
    return cloned;
  }

  // 处理 Map
  if (obj instanceof Map) {
    const cloned = new Map();
    visited.set(obj, cloned);
    obj.forEach((value, key) => {
      cloned.set(deepClone(key, visited), deepClone(value, visited));
    });
    return cloned;
  }

  // 处理 Set
  if (obj instanceof Set) {
    const cloned = new Set();
    visited.set(obj, cloned);
    obj.forEach((value) => {
      cloned.add(deepClone(value, visited));
    });
    return cloned;
  }

  // 处理普通对象
  const cloned: Record<string, any> = {};
  visited.set(obj, cloned);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key], visited);
    }
  }
  return cloned;
};

export default deepClone;