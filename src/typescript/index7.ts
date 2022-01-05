/**-------------------------------- */
// ts元组转枚举 todo

/**-------------------------------- */

// 映射 todo
// type PickOptional<T> = {
//     [K in keyof T] ? : T[K]
// }
// type a1 = PickOptional<{ foo: number, bar?: string, flag: boolean }>        // {bar?:string}
// type a2 = PickOptional<{ foo: number, bar?: string }>                       // {bar?:string}
// type a3 = PickOptional<{ foo: number, flag: boolean }>                      // {}
// type a4 = PickOptional<{ foo?: number, flag?: boolean }>                    // {foo?:number,flag?:boolean}
// type a5 = PickOptional<{}>                                                  // {}

/**-------------------------------- */
// 驼峰转横杠
// 知识点 需要灵活运用ts内置type Lowercase/Uppercase
type KebabCase<T extends string, S extends string = ''> = T extends `${infer L}${infer R}`
    ? Uppercase<L> extends L
    ? (S extends '' ? KebabCase<R, `${Lowercase<L>}`> : KebabCase<R, `${S}-${Lowercase<L>}`>)
    : KebabCase<R, `${S}${L}`>
    : S;
type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag
type a3 = KebabCase<'FangTao'>                 // fang-tao
/**-------------------------------- */

//横杠转驼峰

type CamelCase<T extends string, S extends string = ''> = T extends `${infer L}-${infer R}`
    ? CamelCase<R, `${S}${Capitalize<L>}`>
    : `${S}${ Capitalize<T>}`;
type a11 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a21 = CamelCase<'open-flag'>                // OpenFlag
type a31 = CamelCase<'fang'>                // fang
type a41 = CamelCase<'beijing-huanying-ning'>                // fang

/**-------------------------------- */

// 将字符串字面量类型按照指定字符，分割为元组。无法分割则返回原字符串字面量
type SplitString<T extends string, K extends string, A extends any[] = []> = T extends `${infer L}${K}${infer R}`
    ? SplitString<R, K, [...A, L]>
    : [...A, T];
type A1 = SplitString<'handle-open-flag', '-'>        // ["handle", "open", "flag"]
type A2 = SplitString<'open-flag', '-'>               // ["open", "flag"]
type A3 = SplitString<'handle.open.flag', '.'>        // ["handle", "open", "flag"]
type A4 = SplitString<'open.flag', '.'>               // ["open", "flag"]
type A5 = SplitString<'open.flag', '-'>               // ["open.flag"]
/**-------------------------------- */

// 计算元组类型的长度
type LengthOfTuple<T extends any[] = [], K extends any[] = []> = T extends [infer L, ...infer R] ? T['length'] : 0;
type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0

/**-------------------------------- */
// 参考一下别人的答案，自己就不写了，思路：先转成元组，再取元组的length属性。
type LengthOfString<T, A extends any[] = []> = T extends `${infer L}${infer R}` ? LengthOfString<R, [...A, L]> : A["length"]
type A0 = LengthOfString<'BFE.dev'> // 7
type B0 = LengthOfString<''> // 0
/**-------------------------------- */
export default {}