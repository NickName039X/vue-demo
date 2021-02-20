function foo(num) {
    this.age = 10;
    this.abc = '123';
    console.log("foo:"+num);
    console.log(this.abc);
    this.count++;
  }

  foo.getName = function () {
    console.log(2);
}

  abc = 'sbtao';
  foo.count = 0;
  foo.age = 20;

  var f = new foo(8);

  /////////////////////////////

  function Foo(){
    getName = function(){
        console.log(1);
    };
    return this;
}

Foo.getName = function(){
    console.log(2);
}

Foo.prototype.getName = function(){
    console.log(3);
}

//函数表达式只有var getName;被提升
var getName = function(){
    console.log(4);
}

//函数声明提升到顶部
function getName(){
    console.log(5);}

//输出以下的输出结果

//函数Foo的静态方法
Foo.getName();//2

//function getName有提前声明的规则，声明后被var getName= 。。覆盖，则getName为4
getName();//4

//Foo()的return this为window，window.getName 在Foo里面被覆盖，则输出1
Foo().getName();//1

//同上，因调用了Foo();window的getName被覆盖
getName();//1

//依然只是调用了Foo对象上的getName,又因为Foo.getNname，所以相当于
/**
 *  function a(){console.log(2)};
 *  new a();
 * **/
new Foo.getName();//2

//先执行了new Foo()；返回一个对象，这个对象的getName为prototype上的getName,相当于(new Foo()).getName();
new Foo().getName();//3

//
new new Foo().getName();//3 3是在Foo的原型上找到的()