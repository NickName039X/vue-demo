let arr = []
function addCurry() {
    let arg = Array.prototype.slice.call(arguments); // 递归获取后续参数
    console.log(arg)
    arr = arr.concat(arg);
     if (arg.length === 0) { // 如果参数为空，则判断递归结束
         return arr.reduce((a,b)=>{return a+b}) // 求和
     } else {
         return addCurry;
     }
}

console.log('arr',arr);


addCurry(1)(2)(3)()


function aaa (params) {
    console.log('params',params);

    let arg = Array.prototype.slice.call(params)
    console.log('aaa',arg);

}
aaa([1,2,3])
