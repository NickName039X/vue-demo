var num = '1';
num++;

//
var obj = {
    color: 'yellow',
    valueOf: function () {
        return 2;
    }
}

++obj;//++对象，会尝试调用对象的valueOf()方法，若没有则返回NaN

console.log([] == false)


// 截然不同的结果
Number([]) //0   因为[].toString() === ''
Number('') //0
Boolean([]) //true
Boolean(new Boolean(false)); //true
Boolean(document.all); //特例 false
