<template>
  <div>
    <div>{{message}}，欢迎你学习vue。</div>
    <p> {{num}}</p>
  </div>

</template>

<script>
import mixin from "@/mixin/index.vue"

export default {
  name: "index",
  props: {
    msg: String
  },
  mixins: [mixin],
  data() {
    return {
      message: 'waowao',
    }
  },
  created() {
    //merge test
    console.log(this);
  },
  mounted() {
    console.log(Number.isNaN(1));
    console.log(Number.isNaN('sssqqqtttvvv'));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
