
// 抽奖程序：实现方式一
var cards = Array(62).fill().map((_, i) => {
    return i + 1;
});
console.log('cards:',cards)

function draw(n = 1) { // 一次抽取 n 个，默认一次 1 个
    var ret = [];
    for (var i = 0; i < n; i++) {
        let idx = Math.floor(cards.length * Math.random());
        ret.push(...cards.splice(idx, 1));
    }
    return ret;
}
console.log('抽取10名中奖者：',draw(10)); //抽取一次，10个中奖者




// 先洗牌
function draw2(amount, n = 1) {
    const cards = Array(amount).fill().map((_, i) => i + 1);

    for (let i = amount - 1; i >= 0; i--) {
        let rand = Math.floor((i + 1) * Math.random());
        [cards[rand], cards[i]] = [cards[i], cards[rand]];
    }
    return cards.slice(0, n);
}
console.log(draw2(62, 10));


// es6的generate构造 更优雅的抽奖方式
function* draw3(amount) {
    const cards = Array(amount).fill().map((_, i) => i + 1);

    for (let i = amount - 1; i >= 0; i--) {
        let rand = Math.floor((i + 1) * Math.random());
        [cards[rand], cards[i]] = [cards[i], cards[rand]];//洗牌
        console.log()
        yield cards[i];//取数
    }
}
var drawer = draw3(62);

console.log(Array(10).fill().map(() => drawer.next().value)); //一次取出10个结果


function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) { i = -1; }
    }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }

function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

// 不用通过next()遍历， 可以通过for ... of 遍历出来
for (let v of foo()) {
    console.log(v);
}

