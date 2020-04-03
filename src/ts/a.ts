let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// let strlength:number = (someValue as string).length;
console.log(strLength);


function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'

function foo() {
    // okay to capture 'a'
    console.log(a);
    return a;
}

let a;

foo();

({ a, b } = { a: "baz", b: 101 });

let str = '11111111111111111111222';
