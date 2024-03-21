/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums[0] === 0 && nums.length > 1) return false;
    if (nums.length === 1) return true;
    const dp = new Array(nums.length).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        if (dp[i]) {
            let count = nums[i];
            while (count) {
                if (i + count < nums.length) {
                    dp[i + count] = true;
                }
                count--;
            }
            if (dp[nums.length - 1]) {
                return true;
            }
        }
    }
    return dp[nums.length - 1]
};
// const a = canJump([0])
// console.log(a);