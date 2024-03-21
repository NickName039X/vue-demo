//最长递增子序列
//动态规划
/**
 *递推公式： if (array[i] > array[j]) dp[i] = max(dp[i], dp[j] + 1);

 vue3的diff算法采用的是贪心+二分查找
 */
let arr = [3, 5, 2, 8]
function fn (array) {

    const dp = []
    let max = 0;

    for (let i = 0; i < array.length; i++) {
        dp[i] = 1
    }

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j]+1
            }

        }

    }

    console.log('dp',dp);

    for (let i = 0; i < dp.length; i++) {
        max = Math.max(max,dp[i])
    }

    return max
}

const b = fn(arr)
console.log('b',b);

