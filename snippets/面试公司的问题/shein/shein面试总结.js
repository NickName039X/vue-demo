
// for (const iterator of '21321321') {
//     console.log(iterator);
// }

var m = new Map();
m.set('a', 1);
m.set('b', 2);
// console.log(m);


/**
 * Map	Object
附加的Key	Map没有默认的key值	Object具有原型对象，所以它包含默认的key值，并且使用不当时会和自定义的key值产生冲突（在ES5中可以通过Object.create(null)来设置去掉默认的key值，但这种解决方法并不常用）
Key的种类	Map的key值可以是任何类型的值，包括函数、Object和任意基础数据类型	Object的key值只能是String或Symbol
Key的顺序	Map中的key值排序简单直接，一个Map对象迭代键值对、Key、Value的顺序和插入时的顺序相同	一般对象的键值是有顺序的，但这并不绝对，有时对象的键值排序会变得很复杂，所以最好不要依赖于插入的顺序。
大小	Map的大小可以轻松通过size属性来获得	Object的大小必须通过自行获取
迭代	Map是可迭代对象，可以轻松完成迭代	Object没有实现迭代协议，所以无法被for...of直接迭代（但可以自行实现迭代协议，或者使用Object.keys()或Object.entries()来迭代对象的键值和实体，for...in也可以迭代Object的可枚举属性）
性能	Map频繁增减键值对时表现会更好	Object频繁增减键值对时表现较差
 */


// map可以使用NaN作为键
var myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"

// console.log(myMap);


var mySet = new Set();
mySet.add(NaN);
mySet.add(2);

var num = '123';

for (const iterator of myMap) {
    console.log('myMap',iterator);
}

for (const iterator of mySet) {
    console.log(iterator);
}
for (const iterator of num) {
    console.log(iterator);
}

Number.prototype[Symbol.iterator] = function (iterator) {
    var ctx = `${this}`;
    console.log(ctx);
    var lastIndex = 0;
    return {
        next () {
            return {
                value: ctx[lastIndex++],
                done:lastIndex===ctx.length,
            }
        }
    }
}

var num1 = 987654321;

for (const iterator of num1) {
    console.log(iterator);
}


function showargs () {
    console.log(arguments);
    console.log(arguments[Symbol.iterator]);
    // console.log(arguments.callee);
}

showargs(1, 2, 3, 4)



/**
 * 
 * @returns 利用arguments实现不定参数函数
 */
function add () {
    console.log(arguments);
    var result = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        result += element;
    }
    return result;
}

const sum = add(1, 2, 3, 4, 5);
const sum1 = add(10, 20, 30, 40, 50);

console.log('sum',sum);
console.log('sum1',sum1);
