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
