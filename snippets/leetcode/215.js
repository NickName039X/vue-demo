/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//[3,2,3,1,2,4,5,5,6]
var findKthLargest = function (nums, k) {
    let flag = true; //优化点1
    let lastSwapIndex = 0; //优化点2
    for (let i = lastSwapIndex; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                const t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
                flag = false;
                lastSwapIndex = j;
            }
        }
        if (flag) {
            break;
        }
    }
    let pos = 1;
    while (nums.length) {
        const a = nums.shift();
        if (pos === k) return a;
        pos++;
    }
};
const t = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log(t);