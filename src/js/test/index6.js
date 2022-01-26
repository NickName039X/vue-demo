

let promise = new Promise((resolve, reject) => {
    reject()
  throw new Error()
})
promise.catch(err => {
  console.log(err)
})