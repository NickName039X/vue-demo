const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let arr = input.split(' ')
    arr = arr.map(item => {
        return +item
    })
    let [x0, y0, x1, y1] = arr;
    solution(x0, y0, x1, y1)
});

var solution = function (x0, y0, x1, y1) {
    var arr = [];
    for (let i = 0; i <= x0; i++) {
        let temp = []
        for (let j = 0; j <= y0; j++) {
            temp.push(1)
        }
        arr.push(temp)
    }
    arr[x1][y1] = 0;
    let dp = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]]
    for (let i = 0; i < dp.length; i++) {
        let dx = x1 + dp[i][0];
        let dy = y1 + dp[i][1];
        if (dx >= 0 && dx <= x0 && dy >= 0 && dy <= y0) {
            arr[dx][dy] = 0;
        }
    }
    for (let i = 0; i <= x0; i++) {
        for (let j = 0; j <= y0; j++) {
            if (i == 0 && j == 0) continue;
            if (arr[i][j] == 0) {
                continue;
            }
            if (i == 0) {
                arr[i][j] = arr[i][j - 1];
                continue;
            }
            if (j == 0) {
                arr[i][j] = arr[i - 1][j];
                continue;
            }
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }

    }
    console.log(arr[x0][y0])
    return arr[x0][y0]
}
// solution(8,6,0,4)