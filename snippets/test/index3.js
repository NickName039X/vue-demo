var a = {

    name: "bytedance",

    func: function () {

        console.log(this.name);

    },

};

a.func();

var fun1 = a.func;

fun1();

a.func.call({ name: "toutiao" });

let a = {
    foo: 1,
    bar: function(){console.log(this.foo)}
}

a.bar()  //undefined

(function foo() {
    // foo = 10  // 由于foo在函数中只为可读，因此赋值无效
    console.log(typeof foo, foo)
    var desc = Object.getOwnPropertyDescriptors(foo);//获取对象的属性描述符号
    var desc1 = Object.getOwnPropertyNames(foo);
    console.log(desc);
    console.log(desc1);
}()) 