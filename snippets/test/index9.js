const d = {};
let ary = ['赵', '钱', '孙', '孙', '李', '周', '李', '周', '周', '李'];
ary.forEach(k => !d[k] ? d[k] = 1 : d[k]++);
console.log(d);
console.log(Object.keys(d).sort((a, b) => d[b] - d[a]));
const result = Object.keys(d).sort((a, b) => d[b] - d[a]).filter((k, i, arr) => {
    console.log(k, d[k]);
    return d[k] === d[arr[0]]
});
console.log(result)