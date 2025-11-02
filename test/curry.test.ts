import { curry } from '../src/index';

export async function runCurryTests() {
  console.log('========================================');
  console.log('开始运行柯里化测试');
  console.log('========================================\n');

  console.log('测试 1: 基本柯里化功能');
  const add = (a: number, b: number) => a + b;
  const curriedAdd = curry(add);
  console.log(curriedAdd(1)(2));
}

export default runCurryTests;