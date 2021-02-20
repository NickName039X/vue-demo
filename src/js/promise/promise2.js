let fn = function (resolve) { };
let p0 = new Promise(fn);
let p1 = Promise.resolve(p0)
console.log(p0 === p1);

// Promise.resolve和Promise.reject有区别

const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};


function getUsername(userId) {
    return database.users.get({ id: userId })
        .then(function (user) {
            return user.name;
        }).catch(err => {

        });
}
