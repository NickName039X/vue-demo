function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms,1);
        console.log(2);
    });
}

async function asyncPrint(value, ms) {
    let t = await timeout(ms)
    console.log(t)
    console.log(value)
}

asyncPrint(3, 5000)

async function f() {
    return await 123;
  }

  console.log(f())

f().then(v => console.log(v))



