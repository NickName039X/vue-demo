function addCurry() {
    let arr = [...arguments];
    let fn = function () {
        if (arguments.length === 0) {
            return arr.reduce((a, b,index) => {
                console.log("index", index);
                return a + b;
            });
        } else {
            arr.push(...arguments);
            return fn;
        }
    };
    return fn;
}

const result = addCurry(1,2,3)();
console.log("result", result);
