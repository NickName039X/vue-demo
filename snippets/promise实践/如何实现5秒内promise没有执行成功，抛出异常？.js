function timeoutPromise(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise timed out'));
      }, ms);
    });
  }
  
  Promise.race([yourPromise, timeoutPromise(5000)])
    .then(result => {
      // yourPromise resolved within 5 seconds
      console.log(result);
    })
    .catch(error => {
      // either yourPromise rejected or timed out
      console.error(error);
    });