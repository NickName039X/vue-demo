// 我要去[一 | 二]的地方吃(三 | 四)可以吗？
// 注意 [] () 均为英文状态下的符号，若要改成中文请自行替换。
/**
 * 
 * 笔试题内容：
    语料拓展题：一行文本，其中定义两种特殊语法结构
    1. "[一|二]"，表示当前位置可选『一』或『二』或空
    2. "(一|二)"，表示当前位置可选『一』或『二』
    两种语法不可嵌套，即不存在[(一|二)|三]这种语法。

    给定一行文本，请输出它所有可能的普通文本的排列组合。

    举例：我要去[一|二]的地方吃(三|四)可以吗？
    可能的展开包括
    1. 我要去一的地方吃三可以吗？
    2. 我要去一的地方吃四可以吗？
    3. 我要去二的地方吃三可以吗？
    4. 我要去二的地方吃四可以吗？
    5. 我要去的地方吃三可以吗？
    6. 我要去的地方吃四可以吗？
 */
function solution (str) {
    let arr1 = [], arr2 = [];
    let beginMatch1 = false, endMatch1 = false, beginMatch2 = false, endMatch2 = false;
    let s1 = 0, s2 = 0, m1 = 0, m2 = 0;
    const arr = [...str].filter(val => val.trim());
    let newStr = arr.join('');
    // console.log(arr);
    while (arr.length) {
        const a = arr.shift();
        if (a === '[') {
            s1 = newStr.indexOf(a);
            beginMatch1 = true;
        }
        if (a === '(') {
            m1 = newStr.indexOf(a);
            beginMatch2 = true;
        }
        if (a === ']') {
            s2 = newStr.indexOf(a);
            endMatch1 = true;
        }
        if (a === ')') {
            m2 = newStr.indexOf(a);
            endMatch2 = true;
        }
        if (beginMatch1 && !endMatch1) {
            if (a !== '|' && a !== '[') {
                arr1.push(a)
            }
        }
        if (beginMatch2 && !endMatch2) {
            if (a !== '|' && a !== '(') {
                arr2.push(a)
            }
        }

    }
    if (endMatch1) {
        arr1.push('')
    } else {
        arr1 = []
    }

    if (!endMatch2) {
        arr2 = []
    }
    if (!endMatch1 && !endMatch2) return str;
    const replaceTemplate = newStr;
    const tempArr2 = arr2;//每次外层循环重置
    const k1 = newStr.substring(s1, s2 + 1)
    const k2 = newStr.substring(m1, m2 + 1)

    const len1 = arr1.length;
    const len2 = arr2.length;
    for (let i = 0; i < len1; i++) {
        newStr = replaceTemplate;
        arr2 = [...tempArr2]
        newStr = newStr.replace(k1, arr1.shift())
        for (let j = 0; j < len2; j++) {
            const result = newStr.replace(k2, arr2.shift())
            console.log(result);
        }
    }

}
// solution('我要去[一 | 二]的地方吃(三 | 四)可以吗？')
// solution('我要去(一 | 二 | 七)的地方吃[三 | 四]可以吗？')
// solution('[1|2]我要去(一 | 二 | 七)的地方吃可以吗？')
solution('我要去[一|二]的地方吃(三|四)可以吗?我要去[五六|七八九]的地方吃(六六六|777)可以吗?')