/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const temp = [];
        temp.push(nums[i]);
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                temp.push(nums[j]);
            }
        }
        console.log("temp", temp);
    }
};
permute([1, 2, 3]);
