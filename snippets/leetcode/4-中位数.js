/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function sortArray (arr) {
    if (arr.length === 0) return arr;
    let mid = Math.floor(Math.random() * (arr.length - 1))//随机索引
    let left = 0;
    let right = arr.length - 1;
    let larr = [];
    let rarr = [];
    if (left >= right) return arr;
    while (left < mid) {
        if (arr[left] < arr[mid]) {
            larr.push(arr[left])
        } else {
            rarr.push(arr[left])
        }
        left++;
    }
    while (right > mid) {
        if (arr[right] > arr[mid]) {
            rarr.push(arr[right])
        } else {
            larr.push(arr[right])
        }
        right--;
    }

    return [
        ...sortArray(larr),
        arr[mid],
        ...sortArray(rarr)

    ]
}

var findMedianSortedArrays = function (nums1, nums2) {
    const result = sortArray([...nums1, ...nums2])
    const len = result.length - 1;//数组最大下标
    return len % 2 ? (result[Math.floor(len / 2)] + result[Math.ceil(len / 2)]) / 2 : result[len / 2];
};

// const result = findMedianSortedArrays([1, 3], [2])
// console.log(result);