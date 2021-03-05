/**
 * promise接受一个函数参数，该函数的2个参数分别是rsolve和reject，由javascript引擎提供，不用自己部署
 * promise状态不可逆
 */


// 箭头函数版
let p1 = new Promise((resolve, reject) => {
    // 可调换顺序测试调用 只会执行第一个
    resolve(3);//==>跳往then
    console.log(33); //33会打印
    resolve(2);//==>永远不会执行,因为promise已决议
    reject(1);
    reject(new Error(1)); //==>跳往catch

}).then(onfulfilled => {
    console.log(onfulfilled);

}).catch(onrejected => {
    console.log(onrejected);
});

// 普通函数版
let p2 = new Promise(function (resolve, reject) {
    console.log(4);
    // 可调换顺序测试调用
    resolve(3);//==>跳往then
    reject(1); //==>永远不会执行,因为promise已决议
}).then(function (onfulfilled) {
    console.log(onfulfilled);
}).catch(onrejected => {
    console.log(onrejected);
});


// var a = function () { };
setTimeout(p2, 300);
console.log(10);

// 4 10 3


// let p = new Promise(function () { });
// setTimeout(p, 300); //会报错
// // 只需要promise返回的是一个对象。
// setTimeout(() => {
//     dispatch('getReceiveMessages');
// }, 300);




