// promise采用了揭示模式。 
// revealing module
// es5实现
var promise = function(fn) {
    this.status = "pending"; //初始状态
    this.success = undefined;
    this.error = undefined;
    let that = this;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];

    function resolve(val) {
        if (that.status === "pending") {
            that.status = "fullfilled";
            that.success = val;
            // console.log(that.onFulfilledCallback);
            that.onFulfilledCallback.forEach(item => {
                item(); //可不传参
            });
        }
    }

    function reject(val) {
        if (that.status === "pending") {
            that.status = "rejected";
            that.error = val;
            // console.log("reject", val);
            that.onRejectedCallback.forEach(item => {
                item(that.error);
            });
        }
    }

    fn(resolve, reject); //同步的代码，会立即执行

    // 必须返回一个promise
    // then必须是异步的
    promise.prototype.then = function(onFulfilled, onRejected) {
        let myPromise = new promise((resolve, reject) => {
            if (that.status === "fullfilled") {
                onFulfilled(that.success);
            }
            if (that.status === "rejected") {
                onRejected(that.error);
            }
            if (that.status === "pending") {
                //模拟异步逻辑
                that.onFulfilledCallback.push(() => {
                    let res = onFulfilled(that.success);
                    resolve(res); //需要手动触发
                });
                that.onRejectedCallback.push(() => {
                    let err = onRejected(that.error);
                    reject(err); //需要手动触发
                });
            }
        });

        return myPromise; // 链式操作
    };

    promise.prototype.catch = function (callback) {
        return this.then(function () { }, callback);
    }
};
var a = new promise((resolve, reject) => {
    console.log(111);
    // console.log(111);
    // 模拟异步
    setTimeout(() => {
        resolve("ok");
        resolve("error");
    }, 1000);
})
    .then(
        res => {
            console.log("then1", res);
            return 2;
        },
        err => {
            console.log("err");
        }
    )
    .then(res => {
        console.log("then2", res);
    });

// var b = new Promise((resolve, reject) => {
//     resolve('dsb');
//     console.log(222);
// }).then(res => {
//     console.log(res);
// })
// console.log(b);
promise.defer = promise.deferred = function () {
	let dfd = {};
	dfd.promise = new promise((resolve, reject) => {
		dfd.resolve = resolve;
		dfd.reject = reject;
	});
	return dfd;
};

module.exports = promise;