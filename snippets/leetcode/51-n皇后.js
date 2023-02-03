/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let arr = new Array(n).fill([]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = '.';//'.'表示可以放置
        }

    }


    /**检查棋子是否能放 */
    var checkSet = (i, j) => {
        const target = arr[i][j];
        for (let index = 0; index < n; index++) {
            if (arr[i][j] === arr[i][index]) {
                return false;
            }
            if (arr[i][j] === arr[index][j]) {
                return false;
            }
        }

        //对角
        while (i < n-1 && j < n-1) {
            i++;
            j++;
            if (arr[i][j] = 'Q') {
                return false;
            }

        }
        //反对角
        while (i > 0 && j > 0) {
            i--;
            j--;
            if (arr[i][j] = 'Q') {
                return false;
            }

        }
        return true;

    }
    let j = 0;
    let count = 0;
    var backtrack = (j,result = '') => {
        if (j == n) {
            count++;
            return;
        }
        console.log('sasasaa');
        for (let k = 0; k < n; k++) {
            if (checkSet(j, k)) {
                console.log('AAA');
                j++;
                backtrack(++j, k, result);
                j--;
            }
        }

    }

    backtrack(0, '');
    console.log(count);
}

solveNQueens(4);