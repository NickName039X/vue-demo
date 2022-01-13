

const path = require('js/path');

console.log(path.normalize('/koala/Desktop/程序员成长指北/代码pra/..'));

exports.A = 1;


var obj = {1:222, 2:123, 5:888};
var arr = [];
for(key in obj){
    arr[key-1] = obj[key];
}
arr['12'] = null;

var bo = {1:222, 2:123, 5:888};
Array.from(bo);
