import { memoize } from '../src/index';

// 测试 1: 基本缓存功能 - 首次调用不使用缓存
function test1() {
  console.log('测试 1: 基本缓存功能 - 首次调用不使用缓存');
  let callCount = 0;
  
  const expensiveFn = (x: number) => {
    callCount++;
    console.log(`  执行函数，参数: ${x}, 调用次数: ${callCount}`);
    return x * 2;
  };
  
  const memoizedFn = memoize(expensiveFn);
  
  // 首次调用，应该执行函数
  const result1 = memoizedFn(5);
  console.log(`  首次调用结果: ${result1}, 调用次数: ${callCount}`);
  
  if (result1 === 10 && callCount === 1) {
    console.log('  ✓ 测试通过：首次调用执行了函数\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 测试 2: 后续调用使用缓存（无判断函数）
function test2() {
  console.log('测试 2: 后续调用使用缓存（无判断函数）');
  let callCount = 0;
  
  const expensiveFn = (x: number) => {
    callCount++;
    console.log(`  执行函数，参数: ${x}, 调用次数: ${callCount}`);
    return x * 2;
  };
  
  const memoizedFn = memoize(expensiveFn);
  
  // 首次调用
  const result1 = memoizedFn(5);
  // 第二次调用，应该使用缓存
  const result2 = memoizedFn(5);
  // 第三次调用，应该使用缓存
  const result3 = memoizedFn(5);
  
  console.log(`  结果: ${result1}, ${result2}, ${result3}, 调用次数: ${callCount}`);
  
  if (result1 === 10 && result2 === 10 && result3 === 10 && callCount === 1) {
    console.log('  ✓ 测试通过：后续调用使用了缓存\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 测试 3: 使用判断函数决定是否使用缓存
function test3() {
  console.log('测试 3: 使用判断函数决定是否使用缓存');
  let callCount = 0;
  
  const expensiveFn = (x: number) => {
    callCount++;
    console.log(`  执行函数，参数: ${x}, 调用次数: ${callCount}`);
    return x * 2;
  };
  
  // 判断函数：如果新参数和缓存参数相同，则使用缓存
  const shouldUseCache = (newArgs: [number], cachedArgs?: [number]) => {
    return cachedArgs !== undefined && newArgs[0] === cachedArgs[0];
  };
  
  const memoizedFn = memoize(expensiveFn, shouldUseCache);
  
  // 首次调用
  const result1 = memoizedFn(5);
  // 第二次调用相同参数，应该使用缓存
  const result2 = memoizedFn(5);
  // 第三次调用不同参数，应该执行函数
  const result3 = memoizedFn(10);
  // 第四次调用相同参数，应该使用缓存
  const result4 = memoizedFn(10);
  
  console.log(`  结果: ${result1}, ${result2}, ${result3}, ${result4}, 调用次数: ${callCount}`);
  
  if (result1 === 10 && result2 === 10 && result3 === 20 && result4 === 20 && callCount === 2) {
    console.log('  ✓ 测试通过：判断函数正确工作\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 测试 4: 判断函数返回 false，不使用缓存
function test4() {
  console.log('测试 4: 判断函数返回 false，不使用缓存');
  let callCount = 0;
  
  const expensiveFn = (x: number) => {
    callCount++;
    console.log(`  执行函数，参数: ${x}, 调用次数: ${callCount}`);
    return x * 2;
  };
  
  // 判断函数：总是返回 false，不使用缓存
  const shouldUseCache = () => false;
  
  const memoizedFn = memoize(expensiveFn, shouldUseCache);
  
  // 首次调用
  const result1 = memoizedFn(5);
  // 第二次调用，判断函数返回 false，应该执行函数
  const result2 = memoizedFn(5);
  // 第三次调用，判断函数返回 false，应该执行函数
  const result3 = memoizedFn(5);
  
  console.log(`  结果: ${result1}, ${result2}, ${result3}, 调用次数: ${callCount}`);
  
  if (result1 === 10 && result2 === 10 && result3 === 10 && callCount === 3) {
    console.log('  ✓ 测试通过：判断函数返回 false 时执行函数\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 测试 5: 无参数函数
function test5() {
  console.log('测试 5: 无参数函数');
  let callCount = 0;
  
  const expensiveFn = () => {
    callCount++;
    console.log(`  执行函数，调用次数: ${callCount}`);
    return Math.random();
  };
  
  const memoizedFn = memoize(expensiveFn);
  
  // 首次调用
  const result1 = memoizedFn();
  // 第二次调用，应该使用缓存
  const result2 = memoizedFn();
  
  console.log(`  结果: ${result1}, ${result2}, 调用次数: ${callCount}`);
  
  if (result1 === result2 && callCount === 1) {
    console.log('  ✓ 测试通过：无参数函数缓存正常工作\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 测试 6: 多参数函数
function test6() {
  console.log('测试 6: 多参数函数');
  let callCount = 0;
  
  const expensiveFn = (x: number, y: number, z: number) => {
    callCount++;
    console.log(`  执行函数，参数: (${x}, ${y}, ${z}), 调用次数: ${callCount}`);
    return x + y + z;
  };
  
  // 判断函数：比较所有参数是否相同
  const shouldUseCache = (newArgs: [number, number, number], cachedArgs?: [number, number, number]) => {
    return cachedArgs !== undefined &&
           newArgs[0] === cachedArgs[0] &&
           newArgs[1] === cachedArgs[1] &&
           newArgs[2] === cachedArgs[2];
  };
  
  const memoizedFn = memoize(expensiveFn, shouldUseCache);
  
  // 首次调用
  const result1 = memoizedFn(1, 2, 3);
  // 第二次调用相同参数，应该使用缓存
  const result2 = memoizedFn(1, 2, 3);
  // 第三次调用不同参数，应该执行函数
  const result3 = memoizedFn(4, 5, 6);
  
  console.log(`  结果: ${result1}, ${result2}, ${result3}, 调用次数: ${callCount}`);
  
  if (result1 === 6 && result2 === 6 && result3 === 15 && callCount === 2) {
    console.log('  ✓ 测试通过：多参数函数缓存正常工作\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 测试 7: 判断函数省略参数
function test7() {
  console.log('测试 7: 判断函数省略参数');
  let callCount = 0;
  
  const expensiveFn = (x: number) => {
    callCount++;
    console.log(`  执行函数，参数: ${x}, 调用次数: ${callCount}`);
    return x * 2;
  };
  
  // 判断函数省略参数，只根据缓存结果判断
  const shouldUseCache = (_newArgs: any, _cachedArgs: any, cachedResult: any) => {
    // 如果缓存结果是偶数，使用缓存；否则不使用
    return cachedResult !== undefined && cachedResult % 2 === 0;
  };
  
  const memoizedFn = memoize(expensiveFn, shouldUseCache);
  
  // 首次调用（返回偶数）
  const result1 = memoizedFn(5); // 返回 10（偶数）
  // 第二次调用，应该使用缓存
  const result2 = memoizedFn(3);
  
  console.log(`  结果: ${result1}, ${result2}, 调用次数: ${callCount}`);
  
  if (result1 === 10 && result2 === 10 && callCount === 1) {
    console.log('  ✓ 测试通过：判断函数可以省略参数\n');
  } else {
    console.log('  ✗ 测试失败\n');
  }
}

// 运行所有测试
export function runMemoizeTests() {
  console.log('开始测试 memoize 函数...\n');
  try {
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
    test7();
    console.log('memoize 测试完成！\n');
  } catch (error) {
    console.error('测试过程中发生错误:', error);
    throw error;
  }
}

