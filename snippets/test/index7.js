const array1 = ['a', 'b', 'c'];

array1.forEach(
    element => {
        console.log(this);//this指向window
        console.log(element);
    }
);

const arr = ['h', 'e', 'l','l','o'];
arr.forEach(function(element){
    arr.shift()
    console.log(element)
});
// expected output: "a"
// expected output: "b"
// expected output: "c"

function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
  
    propNames.forEach(function(name) {
      const desc = Object.getOwnPropertyDescriptor(obj, name);
      console.log('desc',desc)
      Object.defineProperty(copy, name, desc);
    });
  
    return copy;
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = copy(obj1); // 现在 obj2 看起来和 obj1 一模一样了
