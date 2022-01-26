Function.prototype.myBind = function(context) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    //返回一个绑定this的函数，这里我们需要保存this
    const _this = this;
    const args = [...arguments].slice(1);
    //返回一个函数
    return function F() {
        //因为返回一个函数，我们可以new F()需要判断能当做构造函数吗
        if (this instanceof F) {
            return new _this(...args, ...arguments);
        }
        return _this.apply(context, args.concat(...arguments));
    };
};
//////////////////////////////////////////////////////////////
function f(){
    return this.a;
  }
  
  var g = f.bind({a:"azerty"});
  console.log(g()); // azerty
  
  var h = g.bind({a:'yoo'}); // bind只生效一次！
  console.log(h()); // azerty
  
  var o = {a:37, f:f, g:g, h:h};
  console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
