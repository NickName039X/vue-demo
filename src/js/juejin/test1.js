function sum(a, b) {
    console.log(arguments);
    let args = Array.prototype.slice.call(arguments,10);
    console.log(args);
    console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
}
sum(1, 2,3,4);//3

var arr = Array.prototype.slice(1,2,function(){
    return 3;
});


// var toString = {}.toString;
// function cof(it) {
//   return toString.call(it).slice(8, -1);
// };
//
// var result = cof([1,2,3])
