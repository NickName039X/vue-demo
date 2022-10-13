

// window.addEventListener('unhandledrejection', function (res) {
//     event.preventDefault()
//     console.log(111);
// });


// Promise.reject('test').then();
// const p = new Promise((resolve) => {
//     console.log(a);
// });

// try {
//     Promise.reject('test').finally(res => {
//         console.log(22222222,res);
//     })
// } catch (error) {
//     console.log('haha');
// }

// resolve 的值是 undefined
Promise.resolve(2).then((a) => {}, () => {})

// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// reject 的值是 undefined
Promise.reject(3).then(() => {}, () => {})

// reject 的值是 3
Promise.reject(3).finally(() => {})