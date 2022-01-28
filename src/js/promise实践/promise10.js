Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)
//1 传非函数值会发生穿透

let a = Promise.resolve(1);
let b = a.then(2);
let c = b.then(Promise.resolve(3))
console.log(a,b,c);

/* 用promise规范解决promise穿透现象 */
//then 方法必须返回一个 promise1 对象 注3
//
// promise2 = promise1.then(onFulfilled, onRejected);
// 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)
// 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
// 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
// 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因

// 1 2 3 4 5 8 9 6 7 18 19

