/**-------------------------------- */
import { Form } from './index1';
type Form1 = Form;

type PickAndRequired<T, K extends keyof T> = {
    [Key in K]-? : T[Key]
  }
  // type yyyy = {name:string, age:number, id:object}
  type yyyy = PickAndRequired<{ name?: string, age?: number, flag?: boolean, id: object }, 'name' | 'flag' | 'id'>
/**-------------------------------- */
// 合并两个对象类型T以及K，如果属性重复，则以K中属性类型为准；这题对我来说超纲，以后在看
type Merge<T, K> = { [k in Exclude<keyof T, keyof K>]: T[k] } & K

type obj1 = {
    el: string,
    age: number
}

type obj2 = {
    el: HTMLElement,
    flag: boolean
}

type obj3 = Merge<obj1, obj2>   // {el:HtmlElement,age:number,flag:boolean}

const a = {...{} as obj3}
console.log(a.el.scrollTop, a.age.toFixed(0), a.flag.valueOf())
// console.log(a.el.charAt(0))     // error

/**-------------------------------- */
// 思路：逐个替换
type Replace<T extends string, F1 extends string, F2 extends string> = T extends `${infer L}${F1}${infer R}` ? `${L}${F2}${Replace<R, F1, F2>}` : T
type a1 = Replace<'types are fun! it is so fun!', 'fun', 'awesome'> // expected to be 'types are awesome! it is so awesome!'
/**-------------------------------- */

//字符串转元组
type StringToTuple<T extends string> = T extends `${infer L}${infer R}` ? [L, ...StringToTuple<R>] : [];

type StringToTuple2<T extends string, TT extends any[] = []> = T extends '' ?
 TT : T extends `${infer L}${infer R}` ? StringToTuple2<R, [...TT, L]> : never
type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<null> // []
type C = StringToTuple<'fa'> // []
type D = StringToTuple<'fang'|'tao'> // []
/**-------------------------------- */

//元组转字符串
type TupleToString<T, Prev extends string = ''> = T extends [infer L, ...infer R] ? (L extends `${infer LL}` ? TupleToString<R, `${Prev}${LL}`> : '') : Prev

//下面是我的写法 会有问题，暂时不知道怎么解决
// type TupleToString<T extends any[], TT extends string = ''> = T extends [] ? TT : T extends [infer L, ...infer R] ? TupleToString<R, `${L}`> : never;
type A0 = TupleToString<['a', 'b', 'c']> // 'abc'
type B0 = TupleToString<[]>              // ''
type C0 = TupleToString<['a']>           // 'a'


type TupleToString111<T, Prev extends string = ''> = T extends [infer L, ...infer R] ? (L extends `${infer LL}${infer RR}` ? TupleToString<R, `${Prev}${LL}`> : '') : Prev
type A111 = TupleToString<['abc', 'd', 'e']>

/**-------------------------------- */

// 反转元组
type ReverseTuple<T, TT extends any[] = []> = T extends [infer L, ...infer R] ? ReverseTuple<R, [L, ...TT]> : TT

type A1 = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B1 = ReverseTuple<[1, 2, 3]> // [3,2,1]
type C1 = ReverseTuple<[]> // []

/**-------------------------------- */

// TODO 判断是否为没有属性的对象类型
type a = keyof string;
export default {}