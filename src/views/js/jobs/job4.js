var arr = [];
arr.aaa = "10";

console.log(arr.length);
arr["10"] = "world";
arr["20"] = "mmm";
arr["bbb"] = "20";
arr["ccc"] = "30";
arr["ddd"] = "40";
console.log(arr.length);
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}
//arr 下标值加key值混合的数组，key值对应得值不计入数组长度。

var shuzu = [];
shuzu[1] = "20";
console.log(shuzu);
//shuzu length:2

var foo = [];
foo["name"] = "for";
console.log(foo);

for (const key in foo) {
    if (foo.hasOwnProperty(key)) {
        const element = foo[key];
        console.log(element);
    }
}

Array.isArray(foo); //true