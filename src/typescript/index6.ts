/**-------------------------------- */

// 复制字符T为字符串类型，长度为C
// 借助了数组的length属性
type RepeatString<T extends string, N extends number, A extends any[] =
    [], Prev extends string = ''> = N extends A['length'] ? Prev : RepeatString<T, N, [...A, null], `${Prev}${T}`>
type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''

// 复制特定的元组类型C次
type Repeat<T, C extends number, A extends any[] = []> = A['length'] extends C ? A : Repeat<T, C, [...A, T]>;

type A1 = Repeat<number, 3> // [number, number, number]
type B1 = Repeat<string, 2> // [string, string]
type C1 = Repeat<1, 1> // [1]
type D1 = Repeat<0, 0> // []
/**-------------------------------- */

// 去除元组类型T中的A类型
type Filter<T extends any[], K extends any, A extends any[] = []> = T extends [infer L, ...infer R] ? ([L] extends [K] ? Filter<R, K, [...A, L]> : Filter<R, K, [...A]>) : A;
type A2 = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B2 = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C2 = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
type D2 = Filter<[1, 'Boolean', 2, any, true], boolean> // [''any','true']

/**-------------------------------- */

// 判断数字类型的大小，这题好像用处不大？ 先留着
// type A = LargerThan<0, 1> // false
// type B = LargerThan<1, 0> // true
// type C = LargerThan<10, 9> // true

/**-------------------------------- */

// 找出E类型在元组类型T中的下标

type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (keyof T extends keyof K ? keyof K extends keyof T ? true : false : false) : false : false;

type FindIndex<T extends any[], K> = T extends [...infer left, infer last] ? Equal<K, last> extends true ? left["length"] : FindIndex<left, K> : never

type index1 = FindIndex<[1, string, 2, 3, 5], string>
type index2 = FindIndex<[1, 2, string, 3, 5], string>
type index3 = FindIndex<[1, 2, 3, string, 5], string>
type index4 = FindIndex<[1, 2, 3, 5, string], string>
/**-------------------------------- */

type E1<T, K> = [T] extends [K] ? [K] extends [T] ? 'a' : 'b' : 'c'
type E2<T, K> = T extends K ? (K extends T ? 'a' : 'b') : 'c'

type e1 = E1<1 | 2, 2 | 1>          // a：不会分布
type e2 = E2<1 | 2, 2 | 1>          // a,b：会分布（即使是分布，那也应该是只有a呀？）；可能情况是这样的，在T extends K之后的 K extends T的后面的T，已经是收窄了；
                                    // 第一步：(1 extends 2|1 ? {{1}} : 'c') | (2 extends 2|1 ? {{2}} : 'c')第一步两个都通过了
                                    // 第二步：此时{{1}} 应该是 2|1 extends 1，{{2}} 应该是 2|1 extends 2，两个结果都是 'a'|'b'，所以最后结果是这个

// 解释如下
// (1 extends 2|1 ? {{1}} : 'c') | (2 extends 2|1 ? {{2}} : 'c')
type test<K, T> = (K extends T ? 'a' : 'b')
type t1 = test<2 | 1, 1>;
type t2 = test<2 | 1, 2>;

/**-------------------------------- */
// 知识点，可以在ts类型中使用模板字符串。
type Trim<T extends string> = T extends ` ${infer R}` ? Trim<R> : T extends `${infer L} ` ? Trim<L> : T;
// 去掉类型的前后空格
type A3 = Trim<'    BFE.dev'> // 'BFE'
type B3 = Trim<' BFE. dev  '> // 'BFE. dev'
type C3 = Trim<'  BFE .   dev  '> // 'BFE .   dev'
/**-------------------------------- */

export default {}

