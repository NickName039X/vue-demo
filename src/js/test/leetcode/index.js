var longestPalindrome = function (s) {
    let max = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            let temp = s.substr(j, s.length - i);
            let len = temp.length;
            let flag = true;
            for (let m = 0; m < len / 2; m++) {
                if (temp[m] !== temp[len - m - 1]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return temp;
            }
        }
    }
    return max
};

let a = longestPalindrome("babad")
console.log(a);
