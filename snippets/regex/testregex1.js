// // 目前js的正则表达式只支持先行断言和先行否定断言

// var regex1 = /x(?=y)/
// console.log(regex1.test('xyx'))//只匹配y之前的字母x

// var regex2 = /\d+(?=%)/;
// console.log(regex2.test('100%')) //只匹配%之前的数字

// var regex3 = /x(?!y)/

// var regex4 = /\d.(?|\.){3,}/

function goto (val) {
    console.log('哈哈',val)
}

const regex5 = new RegExp(/(?<=编号)(?<no>[0-9a-zA-Z]+)/)
const a = '编号123的dasdsa'.replace(regex5, "<a href=\"void(0)\" onclick=\"goto(e)\">$<no></a>")
console.log(a);
const div = document.createElement('div');
div.innerHTML = a;
document.body.appendChild(div);

