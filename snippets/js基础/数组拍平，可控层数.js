var arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];


/**
 * 
 * @param {} arr 数组
 * @param {*} n 层数
 */
function flattern (arr, n) {
    var result = [];
    if (n === 0) {
        return arr;
    }
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element instanceof Array) {
            result = [
                ...result,
                ...flattern(element, --n)
            ]
        } else {
            result.push(element)
        }
    }

    return result;

}

const result = flattern(arr, 2);
console.log(result);