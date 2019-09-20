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

// var Promise = require("bluebird");

// function getUsername(userId) {

//     return Promise.try(function () {

//         return database.users.get({ id: userID });

//     }).then(function (user) {

//         return user.name;

//     });

// }

// Promise.try可以统一同步错误和异步错误！



