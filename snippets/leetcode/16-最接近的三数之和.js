/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                const t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }

    }

    return nums;
}

var threeSumClosest = function (nums, target) {
    const array = sortArray(nums)
    let minStep = Number.MAX_SAFE_INTEGER;
    let minSum = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < array.length; index++) {
        let left = index + 1;
        let right = array.length - 1;
        while (left < right) {
            const sum = array[index] + array[left] + array[right];
            let min = Math.abs(sum - target);
            if (min < minStep) {
                minStep = min;
                minSum = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                minSum = target;
                break;
            }
        }

    }

    return minSum;

};

threeSumClosest([-1, 2, 1, -4], 1)
