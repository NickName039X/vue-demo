// var p = Promise.resolve(42)
// p.then(msg =>{
//     console.log(msg.toLowerCase())
// }).catch(err => {
//     console.log(111)
// })

var p = Promise.resolve(21)
p.then(msg =>{
    return msg*2
}).then(msg => {
    console.log(msg)
})

p.then(msg => {
    console.log(msg)
})
