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

const r = /1(?=0\d{2})-(\d{8})/
const test = r.exec('1020-12345678')
console.log(test);

const r1 = /^(.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*/
const test1 = r.test('123Aa#9Az#')
console.log(test1);

const regex = /(?=\d{3})+$/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(?=\\d{3})', 'g')

const str = `123456789`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    console.log(m);
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

// let a = {}
// let key1 = 'b'
// for (let i = 0; i < 2; i++) {
//     const b = `${key1}${i}`
//     a[b] = 1;
//     console.log(a);
// }
// console.log(a);
let a = {
    props: {
        name: '1',
        props: {
            age:18
        }
    }
}
const key = 'age';
while (a.props) {
    if (Object.keys(a.props).includes(key)) {
        a.props[key] = 1
    }
    a = a.props
}

var str2 = "Is is the cost of of gasoline going up up";
var patt1 = /\b([a-z]+) \1\b/igm;
const r2 = patt1.exec(str2);
console.log(r2);

// 1231231233
/^( (\d) ( \d (\d) ) )\1\2\3\4$/