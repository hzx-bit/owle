import { debounce } from '../src/index';

/**
 * 简单的测试辅助函数
 */
function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 测试 1: 基本防抖功能
async function test1() {
  console.log('测试 1: 基本防抖功能');
  let callCount = 0;
  
  const debouncedFn = debounce(() => {
    callCount++;
    console.log('  函数被调用，callCount =', callCount);
  }, 100);
  
  // 快速调用多次，应该只执行最后一次
  debouncedFn();
  debouncedFn();
  debouncedFn();
  debouncedFn();
  debouncedFn();
  
  await wait(150);
  
  if (callCount === 1) {
    console.log('  ✓ 测试通过：只执行了 1 次\n');
  } else {
    console.log('  ✗ 测试失败：期望 1 次，实际', callCount, '次\n');
  }
}

// 测试 2: 参数传递
async function test2() {
  console.log('测试 2: 参数传递');
  let lastArgs: number[] = [];
  
  const debouncedFn = debounce((a: number, b: number) => {
    lastArgs = [a, b];
    console.log('  函数被调用，参数:', lastArgs);
  }, 50);
  
  debouncedFn(1, 2);
  debouncedFn(3, 4);
  debouncedFn(5, 6);
  
  await wait(100);
  
  if (lastArgs[0] === 5 && lastArgs[1] === 6) {
    console.log('  ✓ 测试通过：正确传递了最后调用的参数\n');
  } else {
    console.log('  ✗ 测试失败：期望 [5, 6]，实际', lastArgs, '\n');
  }
}

// 测试 3: this 上下文
async function test3() {
  console.log('测试 3: this 上下文');
  let context: any = null;
  
  const obj = {
    name: 'test',
    method() {
      context = this;
      console.log('  函数被调用，this.name =', (this as any).name);
    }
  };
  
  const debouncedFn = debounce(obj.method.bind(obj), 50);
  debouncedFn();
  
  await wait(100);
  
  if (context && context.name === 'test') {
    console.log('  ✓ 测试通过：正确保持了 this 上下文\n');
  } else {
    console.log('  ✗ 测试失败：this 上下文不正确\n');
  }
}

// 运行所有测试
export async function runDebounceTests() {
  console.log('开始测试 debounce 函数...\n');
  try {
    await test1();
    await test2();
    await test3();
    console.log('debounce 测试完成！\n');
  } catch (error) {
    console.error('测试过程中发生错误:', error);
    throw error;
  }
}
