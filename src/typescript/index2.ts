// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// ts 2.6版本之前可以对越界的元素赋值，2.6之后则不可以.
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型

interface Tuple extends Array<number | string> { 0: string; 1: number; }
let y: Tuple;
y = ['hook', 20];
y[3] = 'world';
console.log(y);