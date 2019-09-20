let p = new Promise(function () { });
setTimeout(p, 300);

setTimeout(() => {
    dispatch('getReceiveMessages')
}, 300);

//promise接受一个函数参数，该函数的2个参数分别是rsolve和reject，由javascript引擎提供，不用自己部署
/**
 * promise状态不可逆
 */

// 箭头函数版
let p1 = new Promise((resolve, reject) => {
    // 可调换顺序测试调用
    resolve(3);//==>跳往then
    resolve(2);//==>跳往then
    reject(1); //==>跳往catch

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
    reject(1); //==>跳往catch
}).then(function (onfulfilled) {
    console.log(onfulfilled);
}).catch(onrejected => {
    console.log(onrejected);
});


// var a = function () { };
setTimeout(p2, 300);
console.log(10);

// 4 10 3




