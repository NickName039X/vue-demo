// Partial 对象或接口属性变为可选
export type partial<T> = { [K in keyof T]?: T[K] };

// Required 对象或接口属性变为必选
export type Required<T> = { [P in keyof T]-?: T[P] };

//  Pick 提取指定属性 为新的类型
export type Pick<T, K extends keyof T> = { [P in K]: T[P] };

//   Omit 忽略指定属性为新的类型
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Readonly 所有属性设为只读
export type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

// Exclude 从联合类型中去除指定的类型
export type Exclude<T, U> = T extends U ? never : T;


// Extract 从联合类型中提取指定的类型
export type Extract<T, U> = T extends U ? T : never;

// NonNullable 从联合类型中去除 null 或者 undefined 的类型
declare type NonNullable<T> = T extends null | undefined ? never : T;

// 
declare type MyExclude<T, K> = T extends K ? never : T;


export default {
};
