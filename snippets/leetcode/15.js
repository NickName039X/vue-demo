

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = nums.sort(function (a, b) { return a - b })
    // console.log(arr)
    if (arr.length < 3) return [];
    let result = [];
    let k = 0;
    while (k < arr.length) {
        if (arr[k] > 0) {
            break;
        }

        let i = k + 1;
        let j = arr.length - 1;
        while (i < j) {
            if (k > 0 && arr[k] == arr[k - 1]) {
                break;
            }

            if (arr[i] + arr[j] + arr[k] > 0) {
                j--;
            }
            else if (arr[i] + arr[j] + arr[k] == 0) {
                while (i < j && arr[i] == arr[i + 1]) {
                    i++;
                }
                while (i < j && arr[j] == arr[j - 1]) {
                    j--;
                }
                result.push([arr[k], arr[i], arr[j]])
                i++;
                j--;

            } else {
                i++;
            }


        }
        k++;
    }
    return result
};
let a = threeSum(
    [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0])
console.log(a)