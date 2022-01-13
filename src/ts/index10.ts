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
      name: 'Jarid',
      age: 35
  };

let strings: Person['name'|'age'][] = pluck(person, ['name', 'age']); // ok, string[]
// let strings: string[] = pluck(person, ['name', 'age']); // ok, string[]
console.log(strings);
/**-------------------------------- */
export default {}