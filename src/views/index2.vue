<template>
  <div>
    <p>{{ a }}</p>

    <!-- obj会解构 -->
    <abc v-bind.sync="obj"></abc>

    <!-- p不会解构 -->
    <abc v-bind:person.sync="p"></abc>
  </div>
</template>
<script>
import abc from "./a.vue";

export default {
  name: "index",

  props: {
    status: {
      type: Number,
      default: 0,
    },
  },
  components: {
    abc,
  },
  data() {
    return {
      a: 1,
      obj: {
        title: "人民出版社",
        names: "张三",
      },
      p:{
        name:'方韬',
        age: '18',
        aihao: 'game'
      }
    };
  },
  created() {
    console.log(this);
  },
  mounted() {
    this.a++;
    console.log(this.$options.data()); //可以获取data初始化的值
    console.log(this.$options.methods);
    console.log(this.$options.props);
    console.log(this.$options.render);
  },
  methods: {
    post() {},
  },
};
</script>

<style lang="scss">
</style>
