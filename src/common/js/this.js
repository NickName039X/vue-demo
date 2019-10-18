
// 当this遇到return。如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。

window.name = 'pk';
function fn() {
    this.user = '追梦子';
    console.log(this);
    return null;
}
var a = new fn();
console.log({ name: a.name, user: a.user }); //

