Function.prototype.myApply = function(context, args) {
    //这里默认不传就是给window,也可以用es6给参数设置默认参数
    context = context || window;
    args = args ? args : [];
    //给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol();
    context[key] = this;
    //通过隐式绑定的方式调用函数
    const result = context[key](args);
    //删除添加的属性
    delete context[key];
    //返回函数调用的返回值
    return result;
};

Function.prototype.myApply1 = function(context = window, args = []) {
    context = context || window; // 参数默认值并不会排除null，所以重新赋值
    console.log('context', context);
    context.fn = this; // 让context去调用func
    const result = context.fn(...args);
    delete context.fn;
    return result;
};

function func(a, b, c) {
    console.log(this.name);
    // console.log(a, b, c);
}
var a = {
    name: "dudu"
};

func.myApply1(a, [1, 2, 3]); //this指向对象 a
// console.log
