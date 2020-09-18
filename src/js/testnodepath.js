const path = require('path');

path.resolve('/foo','/bar','/baz');
console.log(path.resolve('/foo','/bar','/baz'));
console.log(path.resolve(__dirname,'dist'));
console.log(path.resolve(__dirname,'/dist'));

let regex = /\.(png|jpe?g|gif|svg)(\?.*)?$/;
console.log(regex.test('a.png'));
console.log(regex.test('a.png.jpg'));
console.log(regex.test('a.png?query=123'));//true 这种适用于网络图片
