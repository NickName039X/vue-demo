  // 全局无法使用let定义的变量，let在全局定义的变量不在window里，只在script作用域中。
  let a = 456;
  var score = 100;
  let obj = {
      a:123,
      b:function(){
          console.log(a);
          console.log(this === window);
          console.log(window);
      }
  }
  let djs = obj.b;

  function use(){
      console.log(a);
  }
  djs();
  use();