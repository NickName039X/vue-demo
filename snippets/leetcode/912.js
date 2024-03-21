/**
 * @param {number[]} nums
 * @return {number[]}
 */
// function Node (data, l, r) {
//     this.data = data;
//     this.l = l;
//     this.r = r;
// }
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};
var quickSort = function (nums, l, r) {
    const mid = Math.floor(nums.length / 2);

    if (l > r) return;

    while (l < mid) {
        if (nums[l] > nums[mid]) {
            let t = nums[l];
            nums[l] = nums[mid];
            nums[mid] = t;
        }
        l++;
    }
    console.log(nums);
    while (r > mid) {
        if (nums[r] < nums[mid]) {
            let t = nums[r];
            nums[r] = nums[mid];
            nums[mid] = t;
        }
        r--;
    }
    console.log(nums);
    quickSort(nums, l, mid);
    quickSort(nums, mid, r);
};


const aaa = sortArray([-2, 3, -5])
console.log(aaa);