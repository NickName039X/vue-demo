let mixin = {
  data(){
      return {
          message:'hello',
          foo:'abc'
      }
  },

  created(){
      console.log('混入对象的钩子函数被调用')
  }

};
export default mixin;
