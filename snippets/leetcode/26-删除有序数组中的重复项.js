/**
 * @param {number[]} nums
 * @return {number}
 */
// [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function (nums) {
    if (nums.length === 1) return 1;
    let fast = 1;
    let low = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[low]) {
            low++;
            const t = nums[low];
            nums[low] = nums[fast];
            nums[fast] = t;
        }
        fast++;
    }

    return low+1

};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])