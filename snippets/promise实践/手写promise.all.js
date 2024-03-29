const { error } = require("shelljs")

promise.myall = function (promises) {
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {

        for (let index = 0; index < promises.length; index++) {
            Promise.resolve(promises[index]).then(res => {
                result[index] = res
                count += 1
                if(count === promises.length)resolve(result)

            }).catch(reject)

        }
    })
}

/**
 * promise.all如何避免有一个异常就提前终止，办法是在每一个Promise的catch里面手动resolve
 */
