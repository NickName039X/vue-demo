Function.prototype.mycall = function(ctx) {
    var ctx = ctx || window; //判断是否有参数 如果没有

    // console.log(this);

    const fn = Symbol(); //给context新增一个独一无二的属性以免覆盖原有属性
    ctx[fn] = this; // 隐式绑定，改变构造函数的调用者间接改变 this 指向
    const args = [...arguments].slice(1);
    var result = ctx[fn](...args);
    delete ctx[fn];

    return result;
};

function func() {
    console.log(this.name);
}
var a = {
    name: "dudu"
};

func.mycall(a, 1, 2, 3); //this指向对象 a
