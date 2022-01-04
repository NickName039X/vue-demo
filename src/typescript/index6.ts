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

// type FindIndex<T, K, N extends any[] = []> = T extends [infer L, ...infer R] ? (K extends L ? N['length'] : FindIndex<R, K, [...N, L]>) : never;
type A11 = [any, never, 1, '2', true]
type B11 = FindIndex<A, 1> // 2
type C11 = FindIndex<A, 3> // never
/**-------------------------------- */

export default {}