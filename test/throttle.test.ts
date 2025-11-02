import { throttle } from '../src/index';

/**
 * 简单的测试辅助函数
 */
function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// 测试 1: 基本节流功能
async function test1() {
  console.log('测试 1: 基本节流功能');
  let callCount = 0;
  
  const throttledFn = throttle(() => {
    callCount++;
    console.log('  函数被调用，callCount =', callCount);
  }, 100);
  
  // 立即调用一次（应该立即执行）
  throttledFn();
  console.log('  立即调用后，callCount =', callCount);
  
  // 在等待期间多次调用，最后一次会在延迟后执行
  throttledFn();
  throttledFn();
  throttledFn();
  
  await wait(50);
  console.log('  等待 50ms 后，callCount =', callCount);
  
  // 等待超过节流时间后，应该可以再次执行
  await wait(100);
  throttledFn();
  
  await wait(150);
  console.log('  等待完成后，callCount =', callCount);
  
  // 第一次立即执行，第二次延迟执行，第三次在等待后执行
  if (callCount >= 2 && callCount <= 3) {
    console.log('  ✓ 测试通过：节流生效，执行次数 =', callCount, '\n');
  } else {
    console.log('  ✗ 测试失败：期望 2-3 次，实际', callCount, '次\n');
  }
}

// 测试 2: 连续调用节流
async function test2() {
  console.log('测试 2: 连续调用节流');
  let callCount = 0;
  const callTimes: number[] = [];
  
  const throttledFn = throttle(() => {
    callCount++;
    callTimes.push(Date.now());
    console.log('  函数被调用，第', callCount, '次，时间:', callTimes[callTimes.length - 1]);
  }, 100);
  
  const startTime = Date.now();
  
  // 连续快速调用 10 次
  for (let i = 0; i < 10; i++) {
    throttledFn();
    await wait(20); // 每 20ms 调用一次
  }
  
  await wait(200); // 等待所有调用完成
  
  const lastCallTime = callTimes[callTimes.length - 1];
  const duration = lastCallTime ? lastCallTime - startTime : 0;
  console.log('  总调用次数:', callCount);
  console.log('  总耗时:', duration, 'ms');
  
  // 应该在节流时间内被限制执行次数
  if (callCount >= 2 && callCount <= 5) {
    console.log('  ✓ 测试通过：节流生效，执行次数被限制\n');
  } else {
    console.log('  ✗ 测试失败：期望 2-5 次，实际', callCount, '次\n');
  }
}

// 测试 3: 参数传递
async function test3() {
  console.log('测试 3: 参数传递');
  let lastArgs: number[] = [];
  
  const throttledFn = throttle((a: number, b: number) => {
    lastArgs = [a, b];
    console.log('  函数被调用，参数:', lastArgs);
  }, 50);
  
  throttledFn(1, 2);
  throttledFn(3, 4);
  throttledFn(5, 6);
  
  await wait(100);
  
  // 最后一次调用的参数应该被使用
  if (lastArgs[0] === 5 && lastArgs[1] === 6) {
    console.log('  ✓ 测试通过：正确传递了参数\n');
  } else {
    console.log('  ✗ 测试失败：期望 [5, 6]，实际', lastArgs, '\n');
  }
}

// 运行所有测试
export async function runThrottleTests() {
  console.log('开始测试 throttle 函数...\n');
  try {
    await test1();
    await test2();
    await test3();
    console.log('throttle 测试完成！\n');
  } catch (error) {
    console.error('测试过程中发生错误:', error);
    throw error;
  }
}

