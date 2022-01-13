//一道promise面试题
const first = () => (new Promise((resolve,reject)=>{
    console.log(3);
    let p = new Promise((resolve, reject)=>{
         console.log(7);
        setTimeout(()=>{
           console.log(5);
           resolve(6); 
        },0)
        resolve(1);
    }); 
    resolve(2);
    p.then((arg)=>{
        console.log(arg);
    });

}));

first().then((arg)=>{
    console.log(arg);
});
console.log(4);

/*
setTimeout 放入宏任务队列
p的then then1
fiest的then then2

首先执行first()
执行newPromise函数并且 打印 3
 执行 p=new Promise 打印 7
 遇到settimeout放入宏任务队列,等待主线程完成执行微任务再宏任务
 执行 p 的 Promise 改变状态函数 resolve(1)
 执行 first的 Promise 改变状态函数 resolve(2)
 遇到p.then放入微任务队列，等待主线程完成执行微任务再宏任务
 此时first函数同步任务已执行完 
 遇到first.then()也放入放入微任务队列，等待主线程完成执行微任务再宏任务
 执行console.log(4)* 
 此时所有同步任务执行完成，轮询微任务，首先发现微任务队列第一个任务为p.then() 打印 1
 轮询微任务队列 发现第二个微任务为first.then() 打印 2* 
 微任务队列全部执行完成* 
 执行宏任务队列，发现settime，打印 5* 
 执行resolve(6) 发现 p的promise已经被改变状态，再改变状态将忽略，无效*
 
最后结果为 3 7 4 1 2 5
 */
