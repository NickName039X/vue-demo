// 主模块（main.ts）
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');


// 创建工作线程
const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.postMessage('Hello from Worker Thread');
`, { eval: true });

// 监听工作线程的消息事件
worker.on('message', (message) => {
  console.log(`主线程收到消息：${message}`);
  // 主线程收到消息：Hello from Worker Thread
});
