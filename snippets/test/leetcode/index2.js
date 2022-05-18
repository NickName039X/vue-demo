/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let flag = false;
    if (x < 0) {
        flag = true;
        x = -x;
    }
    let temp = x.toString().split('').reverse().join('');
    if (flag) {
        temp = '-' + temp;
    }
    if (parseInt(temp) > Math.pow(2, 31) - 1 || parseInt(temp) < - Math.pow(2, 31)) {
        return 0;
    }

    return parseInt(temp)

};