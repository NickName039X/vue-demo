var test =require('./nav');
console.log('index=======>',test.foo);// 1

setTimeout(()=>{
    console.log('index========>',test.foo) // 2
},2000);
