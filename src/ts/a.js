var _a;
var someValue = "this is a string";
var strLength = someValue.length;
// let strlength:number = (someValue as string).length;
console.log(strLength);
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
function foo() {
    // okay to capture 'a'
    console.log(a);
    return a;
}
var a;
foo();
(_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b);
var str = '11111111111111111111';
