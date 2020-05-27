// @flow
function concat1(a?, b) {
    return a;
}

concat1('foo','bar');
concat1(1,2);
concat1(undefined,9);


function method() {
    return this;
}


var num: number = method.call(42);

// // $ExpectError
// var str: string = method.call(42);

