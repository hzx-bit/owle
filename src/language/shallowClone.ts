/**
 * 浅拷贝函数 - 浅拷贝一个对象
 * @param obj 要克隆的对象
 * @returns 克隆后的对象
 */
const shallowClone = (obj: any) => {
  return { ...obj };
};

export default shallowClone;