// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
var y;
y = ['hook', 20];
y[3] = 'world';
console.log(y);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
/**-------------------------------- */
// function error(message: string): never {
//     throw new Error(message);
// }
// const a = error('1');
// console.log(a);
var a = 'foo';
a = null;
