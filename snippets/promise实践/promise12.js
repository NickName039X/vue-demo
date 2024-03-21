async function aaa () {
    setTimeout(() => {
        console.log(1);
    }, 0)
    await Promise.resolve(() => { console.log(2); }).then(() => {
        console.log(3);
    })
    console.log(4);
}

aaa();