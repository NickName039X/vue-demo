var p = Promise.resolve(21)
p.then(msg =>{
    return msg*2
}).then(msg => {
    console.log(msg)
})

p.then(msg => {
    console.log('多分支',msg)
})

