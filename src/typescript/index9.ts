/**-------------------------------- */
interface Animal {
    name: string;
}

interface Dog extends Animal {
    break(): void;
}

type AnimalFn = (arg: Animal) => void;
type DogFn = (arg: Dog) => void;

let Eg1: AnimalFn = null;
let Eg2: DogFn;
// 不再可以赋值了，
// AnimalFn = DogFn不可以赋值了, Animal = Dog是可以的

// Eg1 = Eg2产生了逆变 Error 这里会报错
//   Eg1 = Eg2;
// 反过来可以
Eg2 = Eg1;

/**-------------------------------- */

// type ObjectTypes = {
//     objBetter: Record<string, unknown>; // ✅ better，代替 obj: object
// };

// type Eg3 = Record<'a' | 'b', { key1: string }>
// type Eg4 = Record<keyof any, unknown>

/**-------------------------------- */

type Keys = "a" | "b" | "c";

type Obj = { [p in Keys]: any }; // -> { a: any, b: any, c: any }

/**-------------------------------- */

// 交叉类型是取并集
interface A1 {
    name: string;
    age: number;
}

interface A2 {
    color: string;
    age: string;
}

/**
 * T的类型为 {name: string; age: never; color: string}
 */
type T = A1 & A2;

type C<A extends T> = keyof A;
type C1 = C<{ name: "fang"; age: never; color: "red" }>;
// 可通过如下示例验证
const val: T = {
    name: "",
    color: "",
    age: (function a() {
        throw Error();
    })()
};

/**-------------------------------- */
export default {};
