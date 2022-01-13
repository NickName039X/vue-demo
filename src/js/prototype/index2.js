let x = Object.create(Object.prototype);
let y = {};
let z = Object.create(null);
console.log(x,x.__proto__);
console.log(y,y.__proto__);
console.log(z,z.__proto__);
//x,y不纯洁。z是一个很纯洁的对象

let path = require('path');
let fs = require('fs');
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
console.log(path.resolve('./'));
console.log(path.resolve('../'));

exports.A = 1;