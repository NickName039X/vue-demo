var b = 10;
console.log(b);
(function b(){
    // 'use strict'
    b = 20 //非匿名自执行函数无法被覆盖
    console.log(this.b) 
    console.log(b.prototype)
    console.log(b.__proto__)
})()

var bc = 10;
(function b(){
    console.log(bc)
    bc = 5
    console.log(window.bc)
    // var bc = 20
    console.log(bc)
})()
console.log(bc)