Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)

/**
 * 传promise 原封不动返回这个promise;
 * 传thenable对象，执行then方法；
 * 传非thenable对象，返回一个新的resolved的promise对象；
 * 不带任何参数，返回一个resolved的promise对象
 * 
 */


let a = Promise.resolve(1);
let b = a.then(2);
let c = b.then(Promise.resolve(3))
console.log(a, b, c);

/* 用promise规范解决promise穿透现象 */
//then 方法必须返回一个 promise1 对象 注3
//
// promise2 = promise1.then(onFulfilled, onRejected);
// 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)
// 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
// 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
// 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因

// 1 2 3 4 5 8 9 6 7 18 19

new Promise((resolve, reject) => {
  reject(1) //失败状态
})
  .then(value => {
    console.log('成功1', value);
  }, reason => {
    console.log('失败1', reason); //失败 1；无返回值、默认返回成功状态，状态值为undefined
  })
  .then(value => {
    console.log('成功2', value); //成功 undefined
  }, reason => {
    console.log('失败2', reason);
  })
  .catch(reason => console.log('失败3', reason)) //这里增加catch，但是不会走到这里来

////////////////////////////////////////////////////////////////////////
// catch传递非函数也会发生穿透
new Promise((resolve, reject) => {
  reject(1) //失败状态
})
  .then(value => {
    console.log('成功A', value); //没有指定失败的回调函数，不执行代码，去往下一级寻找失败状态回调函数
  })
  .then(value => {
    console.log('成功B', value); //没有指定失败的回调函数，不执行代码，去往下一级寻找失败状态回调函数
  })
  .catch(reason => console.log('失败C', reason))  //这里执行了，失败 1；
//打印结果
//失败 1；

//当then方法中没有指定失败的回调函数时，
//使用.catch会默认为没有指定失败回调函数的.then指定失败回调函数为：
// reason => {
//   throw reason //注意不是return reason 而是throw reason ；throw保证了返回结果为失败
// }




