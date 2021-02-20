new Promise((resolve, reject) => {
    throw new Error("Whoops!");
  }).catch(err => {
      console.log(err)
  }); // Error: Whoops!

  var p = new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    throw new Error("Whoops!"); // reject 这个 promise
  }).catch(err => {
      console.log(err)
  }); // Error: Whoops!

  console.log(p)