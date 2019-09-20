// let name = 'default';
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log('name', this.name);
        return this.name + ' ' + this.age;
    };
    console.log('调用了Person的构造函数', this);
    return this;
}
let p1 = new Person('bcb', 12); //返回一个实例化了的对象
let p2 = Person('cyy', 90); //undefined
let name = 'global';

let myobj1 = new Object();
let myobj2 = Object();

let obj1 = new Object('bnb');
let obj2 = Object('arm');

//=====================================================================

function doSomething() {}
doSomething.prototype.foo = 'bar'; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value'; // add a property onto the object
console.log(doSomeInstancing);



doSomething.__proto__ === Function.prototype; //true
Function.prototype.__proto__ === Object.prototype; //true
doSomething.__proto__.__proto__ === Object.prototype; //true
doSomething.__proto__.__proto__.__proto__ === null; //true


doSomething.__proto__.__proto__ === doSomeInstancing.__proto__.__proto__; //true  Object.prototype
doSomething.__proto__ === Object.getPrototypeOf(doSomeInstancing); //false
Object.prototype.__proto__ === null;

Object.getPrototypeOf(Object.getPrototypeOf(doSomeInstancing)) === doSomething.__proto__.__proto__

Object.getPrototypeOf(Object) === Object.getPrototypeOf(Function);

Object.getPrototypeOf(Function.prototype); //Object
Object.getPrototypeOf(Function); //native code
Object.getPrototypeOf(Object); //native code


