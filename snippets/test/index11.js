var person = { name: 'xiaoxiao', age: 18 };
// for (const iterator of obj) {
// console.log(iterator);  
// }

for (const key in person) {
    console.log(key);
}
var obj = new Object();
Object.getOwnPropertyDescriptors(obj)

var map = new Map();
map.set('name', 'xao')
for (const key of map) {
    console.log(key, map.get(key));
}