Function.prototype.mycall = function(ctx) {
    var ctx = ctx || window; //判断是否有参数 如果没有

    console.log(this);

    //给context新增一个独一无二的属性以免覆盖原有属性
    const fn = Symbol();
    ctx[fn] = this; // 隐式绑定，改变构造函数的调用者间接改变 this 指向
    var array = []; //储存参数
    for (i = 1; i < arguments.length; i++) {
        array.push("arguments[" + i + "]");
    }

    // console.log(array);

    // console.log('第二次打印', ctx.fn);
    //此处运用es6的语法
    // 利用了this的隐式绑定

    var result = ctx[fn](...array);

    delete ctx[fn];

    return result;
};

function func() {
    console.log(this, this.name);
}
var a = {
    name: "dudu"
};

func.mycall(a, 1, 2, 3); //this指向对象 a
