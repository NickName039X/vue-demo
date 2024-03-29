
// 利用promise的race，构造一个promise跟要中断的那个作为参数传给race方法，然后定时轮训

const { reject } = require("core-js/fn/promise");

let p = new Promise((resolve, reject) => {
      resolve(1);
});

p.then(value => {
      console.log('000');
      return Promise.resolve(666);//返回一个resolve状态的promise继续调用
      // return new Promise((resolve,reject) => {}) //返回一个pending状态的promise中止链式调用
}).then(value => {
      console.log(22222)
});
