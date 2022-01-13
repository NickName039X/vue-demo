interface Lengthwise {
    length: number;
}

/** T extends xxx表示 泛型T的类型被xxx约束了 */
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

const b = [1, 2, 3];
loggingIdentity(b);


// function getProperty(obj: T, key: K) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

/**-------------------------------- */

type IsNever<传入类型> = 传入类型 extends never ? true : false;

type A1 = IsNever<true> // false
type B1 = IsNever<never> // true
type C1 = IsNever<undefined> // false

/**-------------------------------- */

type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T20 = Boxed<string>;  // BoxedValue<string>;
type T21 = Boxed<number[]>;  // BoxedArray<number>;
type T23 = Boxed<boolean[]>;  // BoxedArray<noolean>;
type T24 = Boxed<symbol[]>;  // BoxedArray<symbol>;
type T22 = Boxed<string | number[]>;  // BoxedValue<string> | BoxedArray<number>;

/**-------------------------------- */
type Diff<T, U> = T extends U ? never : T;  // Remove types from T that are assignable to U
type Filter<T, U> = T extends U ? T : never;  // Remove types from T that are not assignable to U

type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"
type T32 = Diff<string | number | (() => void), Function>;  // string | number
type T33 = Filter<string | number | (() => void), Function>;  // () => void

type NonNullable1<T> = Diff<T, null | undefined>;  // Remove null and undefined from T

type T34 = NonNullable1<string | number | undefined>;  // string | number
type T35 = NonNullable1<string | string[] | null | undefined>;  // string | string[]

function f1<T>(x: T, y: NonNullable1<T>) {
    x = y;  // Ok
    // y = x;  // Error
}

function f2<T extends string | undefined>(x: T, y: NonNullable1<T>) {
    x = y;  // Ok
    // y = x;  // Error
    let s1: string = x;  // Error
    let s2: string = y;  // Ok
}


/**-------------------------------- */

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

/**-------------------------------- */
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let s1 = Status.Ready;
s1 = 7;  // ok 数字类型可以分配给枚举类型


/**-------------------------------- */

// 获取元组数组的第一个类型
type FirstItem<T> = T extends [infer L, ...infer R] ? L : never

type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'

// 获取元组数组的最后一类型
type LastItem<T> = T extends [...infer L, infer R] ? R : never
type A11 = LastItem<[string, number, boolean]> // boolean
type B11 = LastItem<['B', 'F', 'E']> // 'E'
type C11 = LastItem<[]> // never

// 推断promise的return类型
type UnwrapPromise<T> = T extends Promise<infer T> ? T : never
type u1 = UnwrapPromise<Promise<string>> // string
type u2 = UnwrapPromise<Promise<null>> // null
// type C = UnwrapPromise<null> // Error

/**-------------------------------- */

type PickAndRequired<T, K extends keyof T> = {
    [Key in K]-? : T[Key]
  }
type yyyy = PickAndRequired<{ name?: string, age?: number, flag?: boolean, id: object }, 'name' | 'flag' | 'id'>
  
/**-------------------------------- */
export default {} //使用模块避免不同的typescript文件中存在相同的变量命名冲突
