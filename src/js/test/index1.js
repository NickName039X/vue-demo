const map = new Map ();
var obj = {a:1};
map.set ('name', 'ft');
map.set ('phone',1383838438);
map.set (obj, 'haha');
map.get ('name');

// map取对象时，比较的是引用地址，所以要传引用地址作为key去查询
let object = map.get (obj);
console.log(object);