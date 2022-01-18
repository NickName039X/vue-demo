/** 最长子字符串 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('')
    if(arr.length == 0) return 0;
    let len=0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 1;
        let uniqueArr = [];
        for (let j = i+1; j < arr.length; j++) {
            uniqueArr.push(arr[i])
            if(arr[i] != arr[j]){
                if(uniqueArr.indexOf(arr[j]) == -1){
                    uniqueArr.push(arr[j])
                    sum++;
                }else{
                    break;
                }
            }else{
                break;
            }
        }
        uniqueArr = [];
        len = Math.max(len,sum)
    }
    return len
};
let len = lengthOfLongestSubstring('pwwkew')
console.log(len)