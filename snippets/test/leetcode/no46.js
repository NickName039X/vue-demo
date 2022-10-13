let res = new Array()
var permute = function(nums) {
    res = []
    let track = new Array()
    backtrack(nums, track)
    return res
};

function backtrack(nums, track) {

    // base code
    if (track.length == nums.length) {
        let temp = []
        // 这里需要深度copy 一下，否则返回 []
        for (let i = 0; i < track.length; i += 1) {
            temp.push(track[i])
        }
        res.push(temp)
        return
    }

    for (let i = 0; i < nums.length; i += 1) {
        console.log('i--tracks', i, track);
        if (track.indexOf(nums[i]) != -1) {
            continue
        }
        track.push(nums[i])
        // 进入下一层
        backtrack(nums, track)
        // 取消选择
        track.pop()
    }
}
permute([1,2,3,4])