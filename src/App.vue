<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/hello/index.vue";
import tableMain from "./components/table/table.vue";

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
