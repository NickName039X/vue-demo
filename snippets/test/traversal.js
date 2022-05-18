Array.prototype.sayHello = function () {
    console.log("Hello")
}
Array.prototype.str = 'world';
var myArray = [1, 2, 10, 30, 100];
myArray.name = '数组';

for (let index in myArray) {
    // typeof index string
    // console.log(typeof index);
    console.log(myArray[index]);
}

// 结论：遍历了原型上的属性

console.log('\n');

Object.prototype.sayHello = function () {
    console.log('Hello');
}
Object.prototype.str = 'World';
var myObject = { name: 'zhangsan', age: 100 };

for (let index in myObject) {
    console.log(index);
}

// 结论：
// 1. index索引为字符串型数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序
// 3. 使用for in会遍历数组所有的可枚举属性，包括原型。例如上面的原型方法method和name属性 

console.log('\n');


Object.prototype.china = 'pop';
var myOwnObject = {
    name:'LuCas',
    age:29
};

function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield propKey;
    }
}

for (let key of objectEntries(myOwnObject)) {
    console.log(key);
}

// 结论：能被for...of遍历的对象必须拥有iterate方法，for...of遍历的过程相当于重复调用了next()方法

//for...of不会遍历原型链上的属性





