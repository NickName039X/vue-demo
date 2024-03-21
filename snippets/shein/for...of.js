function createIterator(items) {
    var i = 0;
    return {
        next: function() {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}

// iterator 就是一个迭代器对象
var iterator = createIterator([1, 2, 3]);

console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: true, value: undefined }

const obj = {
    value: 1
};

function createObjIterator (obj) {
    return {
        next () {
              for (const [key, value] of Object.entries(obj)) {
                console.log(`${key}: ${value}`);
              }
        }
    }
}

obj[Symbol.iterator] = function() {
    return createIterator([1, 2, 3, 4]);
};

for (value of obj) {
    console.log('gogo', value);
}
