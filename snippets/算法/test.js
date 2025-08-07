function deepClone(obj) {
    // 处理基本类型
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // 初始化队列和映射表
    const queue = []; // 用于存储待拷贝的对象
    const map = new WeakMap(); // 用于处理循环引用

    // 创建新对象
    const cloneObj = Array.isArray(obj) ? [] : {};
    queue.push({ source: obj, target: cloneObj });
    map.set(obj, cloneObj);

    // 使用 BFS 遍历对象
    while (queue.length > 0) {
        console.log("queue", queue,'len----',queue.length);

        const { source, target } = queue.shift();

        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                const value = source[key];

                // 处理基本类型
                if (value === null || typeof value !== "object") {
                    target[key] = value;
                } else {
                    // 处理循环引用
                    if (map.has(value)) {
                        target[key] = map.get(value);
                    } else {
                        // 创建新对象
                        const newValue = Array.isArray(value) ? [] : {};
                        target[key] = newValue;
                        map.set(value, newValue);

                        // 将新对象加入队列
                        queue.push({ source: value, target: newValue });
                    }
                }
            }
        }
    }

    return cloneObj;
}

// 示例
const obj = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling"],
    address: {
        city: "New York",
        zip: "10001",
        details: {
            street: "5th Avenue",
            building: "123",
        },
    },
};

const deepCopy = deepClone(obj);
//   console.log(deepCopy);
