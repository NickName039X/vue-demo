class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 事实上，类的所有方法都定义在类的prototype上面

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    toHexString() {
        return 'hex';
    }
}


Object.assign(Point.prototype, {
    f1() { },
    f2() { },
    speakEnglish() { return 'Yes,I can speak English' },
});

var dot = new Point(20,30);


function es5Point(x, y) {
    this.x = x;
    this.y = y;

    this.speak = function () {
        return 'speak'
    };

    this.eat = function () {
        return 'eat';
    }
}

var p = new es5Point();
p.speak();




/* 
    总结：
    1.在class中定义的方法都是不可枚举的，而es5可以。
    2.事实上，类的所有方法都定义在类的prototype上面。
    3.由于__proto__不是标准规范，所以应该尽量避免在生产环境使用它来获取对象的原型，以避免对环境产生依赖。
    应使用Object.getPrototypeOf来获取

    4.class默认是严格模式
    5.class内部不存在变量提升
    6.class可以使用表达式定义
    7.是class不是Class注意大小写


    other

    interface属于typescript范畴
    for...of循环调用遍历器
 */






