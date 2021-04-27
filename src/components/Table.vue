<template>
  <el-container style="height: 500px; border: 1px solid">
    <el-aside>
      <el-menu
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#ffd04b"
      :default-openeds="['1', '3']"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>导航一
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/table/template1">template1</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/table/parent">parent</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<style scoped lang="less" rel="stylesheet/less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-container .content {
  width: 100%;
}

.el-submenu .el-menu-item {
  padding: 0 !important;
}

a {
  display: block;
  width: 100%;
  color: #fff;

}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name:'asdsa',
  data() {
    const item = {};
    return {
      tableData: Array(10).fill(item)
    };
  },

  created() {},

  async mounted() {
    await this.getComment();
    this.gettodos();
  },

  methods: {
    getComment() {
      console.log("1");
      return this.$http
        .get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
          this.tableData = res.data;
          console.log(2, res);
        });

        
    },

    gettodos() {
      console.log("3");
      this.$http
        .get(" https://jsonplaceholder.typicode.com/todos")
        .then(res => {
          console.log(4, res);
        });
    }
  }
};
</script>
