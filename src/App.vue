<template>
  <div id="app">2222
    <hello-world></hello-world>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/index.vue";
import tableMain from "./components/table.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    tableMain
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
    padding: 0;
    margin: 0;
    list-style:none
}
</style>
