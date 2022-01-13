
function defineReactive(obj){
    Object.defineProperty(obj, 'a', {
        configurable: true,
        enumerable: true,
        get: () => {
            console.log('get value by defineProperty')
            return val
        },
        set: (newVal) => {
            console.log('set中this指向：',this);
            console.log('set value by defineProperty')
            val = newVal
        }
    })
}
let obj = {};
let o = {
    test:function test(){
        defineReactive(obj);
    }
}
o.test(obj)
obj.a = [] // set value by defineProperty
obj.a.push('1') // get value by defineProperty
// obj.a[0] = 1 // get value by defineProperty
// obj.a.pop(1) // get value by defineProperty
obj.a = [1, 2, 3] // set value by defineProperty
obj.a.splice(2, 1); //get value by defineProperty


let arr = []
let arrProxy = new Proxy(arr, {
    get: (target, prop) => {
        console.log('get value by proxy')
        return prop in target ? target[prop] : undefined
    },
    set: (target, prop, value) => {
        console.log('set value by proxy')
        target[prop] = value
        return true
    }
})

arrProxy.push(1)
// get value by proxy  // 获取数组arr的push方法
// get value by proxy  // 获取数组arr的length属性
// set value by proxy  // 设置arr[0] = 1
// set value by proxy  // 设置数组arr长度为1

arrProxy[0] = 1
// set value by proxy

arrProxy[0] = 2
// set value by proxy