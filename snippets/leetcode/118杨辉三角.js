/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var generate = function (rowIndex) {
    let length = rowIndex;
    var dp = new Array();
    for (var i = 0; i < length; i++) {
        dp[i] = new Array();
        for (var j = 0; j < length; j++) {
            if (i === j || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < length; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]

        }
    }

    for (let index = 0; index < rowIndex; index++) {
        dp[index] = dp[index].filter(value => value !== 0)
    }



    return dp

};