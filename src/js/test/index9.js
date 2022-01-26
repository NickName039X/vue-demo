const a = 10 //a需要挂载到全局对象window/global下，才能被this访问。
// window.a = a;

const obj = {
    a: 13,
    b: () => console.log('--', this.a),
    c: function() {
        console.log(this.a)

        this.b()
    }
}

obj.b()
obj.c()