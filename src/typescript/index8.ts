

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

// 类型别名的扩展为交叉类型
type PointX = {
    x: number
}

type Point = PointX & {
    y: number
}

/**-------------------------------- */

interface Eg1 {
    name: string,
    readonly age: number,
  }
  // T1的类型实则是name | age
  type T1 = keyof Eg1
  
  class Eg2 {
    private name: string;
    public readonly age: number;
    protected home: string;
  }
  // T2实则被约束为 age
  // 而name和home不是公有属性，所以不能被keyof获取到
  type T2 = keyof Eg2
  
/**-------------------------------- */
  
/**-------------------------------- */
export default {}