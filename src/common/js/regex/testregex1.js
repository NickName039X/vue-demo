// 目前js的正则表达式只支持先行断言和先行否定断言

var regex1 = /x(?=y)/
console.log(regex1.test('xyx'))//只匹配y之前的字母x

var regex2 = /\d+(?=%)/;
console.log(regex2.test('100%')) //只匹配%之前的数字

var regex3 = /x(?!y)/
