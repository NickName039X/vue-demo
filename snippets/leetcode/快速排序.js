
// [2, 1, 4, 5, 7, 9, -12, 7]

// 递归法
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

// let result = sortArray([2, 1, 4, 5, 7, 9, -12, 7])


// [2, 1, 4, 5, 7, 9, -12, 7]
//快慢指针法
 var sortArray1 = function(nums) {
};