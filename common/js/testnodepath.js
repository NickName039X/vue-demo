const path = require('path');

path.resolve('/foo','/bar','/baz');
console.log(path.resolve('/foo','/bar','/baz'));
console.log(path.resolve(__dirname,'dist'));
console.log(path.resolve(__dirname,'/dist'));
