console.log(exports === module.exports);//true
var exports = module.exports;//node里面默认存在这句代码
exports.name = '"swk"';
exports.age = 18;
exports.hello = function ()
{
    console.log("hello Nodejs!");
}

/**上面的代码等同于 */
module.exports = {
    name: 'swk',
    age: 18,
    hello: function (param)
    {
        console.log('我是swk');
    }
}
var path = require('path');
var path = path.resolve('a', '/b') //
console.log(path);

// exports = xxx相当于修改exports指向的内存地址的对象，对module.exports毫无影响，所以在require('xxx')的时候就会报错
//在node中exports的作用只是辅助module.exports取数据，require('xxx')实际上是从module.exports处取数据的
//在js里面基本数据类型用栈存储，复杂数据类型用堆存储。一个对象它的引用地址保存在栈区，而对象本身保存在堆区，而这常常会导致很多问题

