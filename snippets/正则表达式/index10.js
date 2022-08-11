/**
 * 需求：将【{a}】 替换成a
 */
let s = '我要去【{a}】的地方吃【{b}】可以吗?'
let reg = /\【\{(.*?)\}\】/g;
while (result = reg.exec(s)) {
    s = s.replace(result[0],result[1])
}
console.log(s);

var rel=/([a-z]+)\s([a-z]+)/;
var text="alen turing";
var arr_2=text.replace(rel,"$2 $1");
console.log(arr_2);  //"turing alen