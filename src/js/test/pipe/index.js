//pipe 函数

const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const pipe = (...fns) => param => {
    console.log(param, typeof param);
    console.log(fns, typeof fns);
    fns.reduce((pre, fn) => fn(pre), param)
};
const res = pipe(square, double, addOne)
console.log(res(3)) // 19; addOne(double(square(3)))


const pipe1 = function (...fns) {
    return function (param) {
        return fns.reduce((prev, fn) => fn(prev), param) //param reduce函数
    }
}

const res1 = pipe1(square, double, addOne, square)
console.log(res1(4))


//
function test(...x) {//es6 不定参数
    console.log(...x);
    console.log(typeof x);
    console.log(Array.isArray(x));
    console.log(x.length);
    console.log('arguments:=>', arguments);
    console.log(Object.prototype.toString.call(x));
}


// test(1, 2, 3, 4);