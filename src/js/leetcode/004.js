/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = []
    let count =numRows;
    while(count>0){
        arr.push([])
        count--;
    }
    let y = 0;
    let bottom = true;
    for (let k = 0; k < s.length; k++) {
        if(numRows == 1){
            return s;
        }
        if(y == numRows){
            bottom = false;
            y--;
        }

        if(bottom){
            arr[y].push(s[k]);
            y++;
        }else{
            y--;
            if(y==0){
                k--;
                bottom = true;
            }
            if(!bottom){
                arr[y].push(s[k])
            }
        }

    }
    let str = ''
    for (let i = 0; i < numRows; i++) {
        for(let j=0; j< arr[i].length;j++)
        str += arr[i][j]
    }
    return str
};

let a = convert('PAYPALISHIRING',3);
console.log(a)