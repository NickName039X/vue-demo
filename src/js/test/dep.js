class Dep { //依赖收集器
    constructor() {
        this.subs = [];
        this.name = 'PEKING UNIVERSITY';
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    depend() {
        Dep.taget && this.addSub(Dep.target);
    }

    notify() {
        for (let sub of subs) {
            sub.update();
        }
    }
}
//es6中，类的内部所有的方法都是不可枚举的 (no enumerable)

Dep.target = '666';
let dep = new Dep();
console.log(dep);
console.log(dep.target);

let values = Object.keys(Dep);
console.log(values);