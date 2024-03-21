var [a, b] = { a: 1, b: 2 } //在前面加代码使这行代码不报错
Object.prototype[Symbol.iterator] = function () {
    return Object.values(this)[Symbol.iterator]
}

