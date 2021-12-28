type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>;  // "updatePart"
type T41 = NonFunctionPropertyNames<Part>;  // "id" | "name" | "subparts"
type T42 = FunctionProperties<Part>;  // { updatePart(newName: string): void }
type T43 = NonFunctionProperties<Part>;  // { id: number, name: string, subparts: Part[] }

type ant1 = keyof any;
type ant2<T, K> = K extends string ? K : never;
type ant3 = ant2<any, string>;

// interface Person {
//     name: string;
//     age: number;
//     location: string;
// }
 
// type K1 = keyof Person; // "name" | "age" | "location"
// type K211 = keyof Person[];  // "length" | "push" | "pop" | "concat" | ...
// type K3111 = keyof { [x: string]: Person };  // string

/**-------------------------------- */
// ts元组转联合

type TTuple = [string, number];
type tt0 = TTuple[0|1];
type Res = TTuple[number]; // string | number 

type TupleToUnion<T extends any[]> = T[number]

type Foo = [string, number, boolean]

type Bar = TupleToUnion<Foo> // string | number | boolean

/**-------------------------------- */

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x1: number; y1: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

/**-------------------------------- */
// ts推倒出来类型为bigint
let a = BigInt(Number.MAX_SAFE_INTEGER);


// 将属性变成boolean类型
type OptionsFlags<T> = {
    //修饰符 一前一后
  -readonly [k in keyof T] -?: Boolean;
};
  
type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
    name?: 'fangtao',
    readonly age: 20,

  };
   
  //把函数类型变成了boolean类型
type FeatureOptions = OptionsFlags<FeatureFlags>;

/**-------------------------------- */
// 获取一个map中所有值的类型

type ValueTypeFromMap<T> = { [k in keyof T]: T[k] }[keyof T]

type a111 = ValueTypeFromMap<{ name: string, age: number, flag?: boolean }>
// string|number|boolean|undefined

export default {}
  
