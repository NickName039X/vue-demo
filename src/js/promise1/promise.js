/**
 * promise接受一个函数参数，该函数的2个参数分别是rsolve和reject，由javascript引擎提供，不用自己部署
 * promise状态不可逆
 */

/**
 * 箭头函数版，输出:
 * 33 3
 */
var p1 = new Promise((resolve, reject) => {
    // 可调换顺序测试调用 只会执行第一个

    resolve(Promise.resolve(3));
    // var t1 = Promise.resolve(3);//如果改成这样不会改变promise的状态，因为这是一个全新的promise
    console.log(t1 == p1); //false
    console.log(33); //33会打印
    // Promise.resolve(2);//==>不执行
    // reject(1);//==>不执行
    // reject(new Error(1)); //==>不执行

}).then(onfulfilled => {
    console.log(onfulfilled);

}).catch(onrejected => {
    console.log(onrejected);
});


/**
 * 普通函数版 输出：
 * 4 3
 */
let p2 = new Promise(function (resolve, reject) {
    console.log(4);
    // 可调换顺序测试调用
    resolve(3);//==>跳往then
    reject(1); //==>不执行
}).then(function (onfulfilled) {
    console.log(onfulfilled);
}).catch(onrejected => {
    console.log(onrejected);
});


// var a = function () { };
setTimeout(p2, 300);//报错 p2不是一个function
console.log(10);

// 4 10 3


// let p = new Promise(function () { });
// setTimeout(p, 300); //会报错
// // 只需要promise返回的是一个对象。
// setTimeout(() => {
//     dispatch('getReceiveMessages');
// }, 300);




