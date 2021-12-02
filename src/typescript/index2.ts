// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// ts 2.6版本之前可以对越界的元素赋值，2.6之后则不可以.
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型

interface Tuple extends Array<number | string> {
    0: string;
    1: number;
}
let y: Tuple;
y = ["hook", 20];
y[3] = "world";
console.log(y);

type MyBool = true | false;

enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

/**-------------------------------- */
/** never类型是指那些会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型 */
function error(message: string): never {
    throw new Error(message);
}
const a1 = error("1");
console.log(a1);

/**-------------------------------- */

/**模拟三目运算符 */
let a = "foo";
a = null;

type IF<T, R, U> = T extends true ? R : U;
type a = IF<1 extends 1 | 2 ? true : false, "aaa", "bbb">;
type b = IF<3 extends 1 | 2 ? true : false, "aaa", "bbb">;

/**-------------------------------- */

/** 获取数组元素的类型 */
type Ids = number[];
type Names = string[];

type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;

type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string

/** 高级用法 推断数组元素的类型 */
type ElementOf<T> = T extends Array<infer E> ? E : T;

type Tuple1 = string[];
type Tuple2 = (string | number)[];

type TupleToUnion = ElementOf<Tuple1>; //TupleToUnion类型为string
type type2 = ElementOf<Tuple2>; //type2类型为

/** 推断某一部分的类型，忽略b,c,d */
type Foo<T> = T extends { a: infer U } ? U : never;
type T10 = Foo<{ a: string }>; // T10类型为 string
type T11 = Foo<{ d: boolean; b: number; c: null }>; // T11类型为 never

/** infer可以推断出联合类型 */
type Foo2<T> = T extends { a: infer U; b: infer U } ? U : never;
type T12 = Foo2<{ a: string; b: number }>; // T12类型为 string | number

/** infer可以推断出交叉类型 */
type T1 = { name: string };
type T2 = { age: number };

type K2<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
    ? U
    : never;

interface Props {
    a: (x: T1) => void;
    b: (x: T2) => void;
}

type k3 = K2<Props>;

/**-------------------------------- */
/** keyof any表示可用作对象索引的任何值的类型。目前，您可以使用string或number或symbol来索引对象 */
type key = keyof any; //string | number | symbol

let ac: any;
ac["a"]; //ok
ac[0]; // ok
ac[Symbol()]; //ok
// ac[{}] // error

/**-------------------------------- */

type CapitalizeString<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T
type MyCapitalizeString<T> = T extends `${infer P}` ? `${Capitalize<P>}` : T
type OtherCapitalizeString<传入类型> = 传入类型 extends string ? `${Capitalize<传入类型>}` : 传入类型

type a1 = CapitalizeString<'handler'>       // Handler
type a2 = CapitalizeString<'parent'>        // Parent
type a3 = CapitalizeString<233>             // 233

type a4 = MyCapitalizeString<'before'>             // before
type a5 = MyCapitalizeString<2333>             // 2333
type a6 = MyCapitalizeString<true>             // true

type a7 = OtherCapitalizeString<'hotUpdate'>             // FangTao

//typescript 4.1内置函数
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>

/**-------------------------------- */


