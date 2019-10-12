
let p = new Promise((resolve, reject) => {
    resolve(1);
});


let p1 = new Promise((resolve, reject) => {
    reject(new Error('你是魔鬼吗?'));
});

// console.log(p1);

p1.then(fullfilled => {
    console.log(fullfilled);
    },
    rejected => {
    console.log('bbbbb',rejected);
}).catch(err => {
    console.log('aaaaa',err);
});

// then的第二个参数和catch只会执行一个
