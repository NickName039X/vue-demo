/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    if (nums1[i] <= nums2[j]) {
        while (nums2.length > 0) {
            while (nums1[i] < nums2[j]) {
                j--;
            }
            nums1.splice(i, 0, nums2.slice(j + 1, nums2.length))
            console.log(nums2)
        }
    }

};
merge([1,2,3,0,0,0],3,[2,5,6],3)