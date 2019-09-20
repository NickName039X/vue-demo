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
              <router-link to="/table/son">son</router-link>
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
      <!-- <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>wood木头人</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="name" label="名字"></el-table-column>
          <el-table-column prop="body" label="内容"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
        </el-table>
      </el-main>-->
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
import { setTimeout } from "timers";
export default {
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
