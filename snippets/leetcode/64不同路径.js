/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m  && obstacleGrid[i][0] === 0; i++){
        dp[i][0] = 1;
    }
    for(let i = 0; i < n && obstacleGrid[0][i] === 0; i++){
        dp[0][i] = 1;
    }
    console.log(dp);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]

};