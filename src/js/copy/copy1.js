var activity = {
    time: new Date(),
    place: undefined,
    meet: function () { },
    address: {
        street: undefined
    }
};

//git rebase 2222222222222222222


var str = JSON.parse(JSON.stringify(activity));
console.log(str);

//JSON是JavaScript的子集



function Person(name) {
    this.name = name;
    console.log(name)
}
const liai = new Person('liai');
const test = {
    name: 'a',
    date: liai,
};
// debugger
const copyed = JSON.parse(JSON.stringify(test));
test.name = 'test'
console.error(test);

//toPrecision() 根据指定的有效数字位数将数字转换成字符串， 如果有效数字位数少于  数字整数部分  位数， 则转换成指数形式
var a = 1234.567
a.toPrecision()    // 1234.567
a.toPrecision(2)   // 1.2e+3
a.toPrecision(4) //1235
a.toPrecision(5)   // 1234.6
a.toPrecision(8)   // 1234.5670

function* gen(x) {
    var y = yield x + 2;
    return y;
}
var g = gen(1);
g.next()  // {value: 3, done: false}
g.next()  // {value: undefined, done: true}
