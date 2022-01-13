/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let minIndex = 0;
    let len = strs.length;
    for (let i = 0; i < len / 2; i++) {
        if (strs[i][0] !== strs[len - 1 - i][0]) {
            return ""
        }
        if (strs[i].length < strs[len - 1 - i].length) {
            minIndex = i;
        }
    }
    let ele = strs[minIndex];
    for (let j = 0; j < ele.length; j++) {
        let temp = ele.substr(0, ele.length - j);
        let flag = true;
        for (let k = 0; k < strs.length; k++) {
            if (strs[k].indexOf(temp) !== 0) {//
                flag = false;
                break;
            }
        }
        if (flag) {
            return temp;
        }
    }

    return ""

};