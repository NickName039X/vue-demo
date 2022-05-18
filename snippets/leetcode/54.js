
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) {
        return temp;
    }
    let temp = [];
    while (matrix.length) {
        let arr = [];
        let m = matrix[0].length;
        let first = matrix.splice(0, 1)
        temp = temp.concat(...first)

        let count = m;
        while (count) {
            arr.push([])
            count--;
        }

        //矩阵逆时针旋转90度
        let len = matrix.length;
        for (let i = 0; i < len; i++) {
            let a = matrix[i].length;
            for (let j = 0; j < a; j++) {
                arr[a - j - 1][i] = matrix[i][j]
            }
        }

        matrix = arr;
    }
    console.log(temp)
    return temp;

};
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])