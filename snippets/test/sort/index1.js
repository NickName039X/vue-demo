//选择排序,核心思想，标记后再交换。
function selectionSort(arr) {
    let len = arr.length
    let minIndex = 0
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        swap(arr, i, minIndex)
    }
    return arr
}

function swap(arr,i,minIndex){
    let t = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = t;
}

let arr = [2, 15, 4, 7, 56, 44];
selectionSort(arr);
console.log('result',arr);
