/**
 * 给定一个整数数组，计算长度为 'k' 的连续子数组的最大总和。
 * 输入：[100,200,300,400]， k = 2
 * 输出：700
 */

//1. 普通解法，时间复杂度o(n*k)
function maxSum(arr, k) {
    const n = arr.length;
    let maxSum = 0;
    for (let i = 0; i < n - k + 1; i++) {
        let currentSum = 0;
        for (let j = 0; j < k; j++) {
            currentSum += arr[i + j];
        }
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
}

let max = maxSum([100, 200, 300, 400], 2)
console.log(max);

