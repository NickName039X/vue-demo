

/**-------------------------------- */

// 模拟splice 有点难 冷静一下有空再搞
// type Splice<
//     T extends any[] = [], 
//     Start extends number = 0, //从哪个位置开始删除
//     Count extends number = 0, //删除的元素个数
//     Replace extends any[] = [], //需要替换的元素
//     Prev extends any[] = [] 
//     > =
//     Prev['length'] extends Start ? 
    
//     // T : Splice<T, Start, Count, Replace, [L]> : T;
// type A1 = Splice<[string, number, boolean, null, undefined, never], 0, 2>
// // [boolean,null,undefined,never]               从第0开始删除，删除2个元素
// type A2 = Splice<[string, number, boolean, null, undefined, never], 1, 3>
// // [string,undefined,never]                     从第1开始删除，删除3个元素
// type A3 = Splice<[string, number, boolean, null, undefined, never], 1, 2, [1, 2, 3]>
// // [string,1,2,3,null,undefined,never]          从第1开始删除，删除2个元素，替换为另外三个元素1,2,3

/**-------------------------------- */
export default {}