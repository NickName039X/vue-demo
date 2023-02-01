/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//[2,7,11,15]
var twoSum = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const remain = target - element;
        const idx = nums.indexOf(remain);
        if (idx > -1 && index!==idx) {
            return [index, idx]
        }
    }
};
const result = twoSum([3, 2, 4], 6)
console.log(result);