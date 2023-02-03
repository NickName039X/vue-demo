/**
 * @param {string} s
 * @return {string}
 */
// babad
// 状态还没ac
var longestPalindrome = function (s) {
    let fast = 1;
    let low = 0;
    while (fast < s.length) {
        const temp = s.substring(low, fast)
        const flag = true;
        for (let index = 0; index < temp.length; index++) {
            if (temp[index] !== temp[temp.length - 1 - index]) {
                flag = false;
            }
        }
        if (flag) {
            low++;
        }
        fast++;
    }
};