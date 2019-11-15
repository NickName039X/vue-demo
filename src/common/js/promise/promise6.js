const promiseFunc = function (resolve, reject) {
    resolve(1);
}

const promise1 = new Promise(promiseFunc);
promise1.then(res => {
    console.log(`then1:${res}`)
    return 2
}).then(res => {
    throw new Error('3err');
    console.log(`then2:${res}`)
    return 3
}, err => {
    console.log(`catch1:${err}`)
    return 101
}).then(res => {
    throw new Error('4err');
    console.log(`then3:${res}`)
    return 4
}, err => {
    console.log(`catch2:${err}`)
    return 202
}).catch(err => {
    console.log(`catch3:${err}`)
    return 10
});

//结论：promise不可逆


const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
  });
  promise.then(function (value) { console.log(value) });
  console.log(123);
