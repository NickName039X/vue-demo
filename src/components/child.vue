<template>
  <div class="content">
    <div class="child">
      <label>姓名</label>
      <input
        type="text"
        :value="$attrs.name"
        v-bind="$attrs"
        v-on="inputListeners"
      >
    </div>
    <div class="child">
      <label>年龄</label>
      <input
        type="number"
        v-bind="$attrs"
        v-on="ageListeners"
      >
    </div>
    <div style="margin:20px;border:1px solid">
      <template1 v-bind="$props"></template1>
      <!--1.传递props-->
      <template1
        style="margin-top: 10px"
        v-bind="$attrs"
      ></template1>
      <!--2.传递非props-->
      <template1
        style="margin-top: 10px"
        v-bind="{...$props,...$attrs }"
      ></template1>
      <!--3.都传递-->
    </div>

    <div style="margin-top: 20px;">
      <div>{{visible}}</div>
      <el-button
        type="primary"
        size="small"
        @click="visible = false"
      >确定</el-button>
    </div>
  </div>
</template>
<script>
import template1 from "./template1.vue";

export default {
  name: "child", //组件名
  props: {
    msg: String,
    visible: false
  },
  inheritAttrs: false, //没有被子组件继承的父组件属性，不会当做特性展示在子组件根元素上面。
  //默认情况下父作用域的不被认作 props 的特性绑定 ( attribute bindings ) 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。false可以取消这种默认
  data() {
    return {};
  },
  components: {
    template1
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
          focus: function (event) {
            vm.$emit("focus", event.target.value);
          }
        }
      );
    },
    ageListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit("ageInput", event.target.value);
          }
        }
      );
    }
  },
  created() {
  },
  mounted() {
    console.log("Child attrs==============", this.$attrs); //vue 2.4.0新增
    console.log("Child listeners==========", this.$listeners); //vue 2.4.0新增
    console.log(this.$parent);
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child {
  background: lightblue;
  padding: 10px;
}

input {
  margin-left: 10px;
}
</style>
