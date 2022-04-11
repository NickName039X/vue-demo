/**-------------------------------- */

// 将对象的值转换成数组

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: "Jarid",
    age: 35
};

let strings: Person["name" | "age"][] = pluck(person, ["name", "age"]); // ok, string[]
// let strings: string[] = pluck(person, ['name', 'age']); // ok, string[]
console.log(strings);
/**-------------------------------- */

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

/**-------------------------------- */

type Quota = {
    a: number;
}

interface state {
    projectQuota: Quota
}




/**-------------------------------- */
// interface描述Array
interface StringArray {
    [index: number]: string;
  }
  
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  
/**-------------------------------- */

// interface描述函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
  
/**-------------------------------- */
const obj = {
    name: "yj",
    getName() {
      return this.name // 可以自动推导为{ name:string, getName():string}类型
    },
  }
obj.getName() // string类型
/**-------------------------------- */


export default state