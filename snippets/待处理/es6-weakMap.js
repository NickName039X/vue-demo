let privateProps = new WeakMap();//
class Point {
    constructor(x, y) {
        this.x = x;
        privateProps.set(this, { y: y });
    }

    // 事实上，类的所有方法都定义在类的prototype上面

    toString() {
        return `（${this.x},${privateProps.get(this).y}）`;
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

var dot = new Point(20, 30);