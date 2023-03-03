/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let length = rowIndex + 1;
    var dp = new Array();
    for (var i = 0; i < length; i++) {        //一维长度为5
        dp[i] = new Array();
        for (var j = 0; j < length; j++) {    //二维长度为5
            if (i === j || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < length; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i][j] = dp[i-1][j-1]+dp[i-1][j]
            
        }
    }

    return dp[rowIndex]

};
getRow(3);