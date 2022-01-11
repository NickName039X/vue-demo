var a = [];
a.push(() => { b => {console.log(b)} })
a.forEach(item => {
    item(3);
});