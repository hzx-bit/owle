import { runDebounceTests } from './debounce.test';
import { runThrottleTests } from './throttle.test';
import { runCurryTests } from './curry.test';
import { runMemoizeTests } from './memoize.test'; 
/**
 * 运行所有测试
 */
async function runAllTests() {
  try {
    console.log('========================================');
    console.log('开始运行所有测试');
    console.log('========================================\n');
    
    // 运行 debounce 测试
    await runDebounceTests();
    
    console.log('----------------------------------------\n');
    
    // 运行 throttle 测试
    await runThrottleTests();
    
    console.log('----------------------------------------\n');
    
    // 运行 curry 测试
    await runCurryTests();
    
    console.log('----------------------------------------\n');
    
    // 运行 memoize 测试
    runMemoizeTests();
    
    console.log('----------------------------------------\n');
    
    console.log('========================================');
    console.log('所有测试完成！');
    console.log('========================================');
  } catch (error) {
    console.error('测试失败:', error);
    process.exit(1);
  }
}

// 运行所有测试
runAllTests();

