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

/**----------------------------------- */
// this和对象的转换
function add(c, d) {
    return this.a + this.b + c + d;
  }
  
  var o = {a: 1, b: 3};
  
  // 第一个参数是用作“this”的对象
  // 其余参数用作函数的参数
  add.call(o, 5, 7); // 16
  
  // 第一个参数是用作“this”的对象
  // 第二个参数是一个数组，数组中的两个成员用作函数参数
  add.apply(o, [10, 20]); // 34
/**----------------------------------- */