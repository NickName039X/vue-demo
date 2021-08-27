<template>
  <div>
    <div>{{message}}，欢迎你学习vue。</div>
    <p> {{message}}</p>
  </div>
</template>
<script>

export default {
  data() {
    return {
      message: 'mixin-test',
      foo: 'abc',
      num:1,
    }
  },

  created() {
    console.log('混入对象的钩子函数被调用')
  }

};
</script>
