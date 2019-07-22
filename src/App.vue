<template>
  <div id="app">
    <HelloWorld />
    <!-- <Main></Main> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./Main.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    Main
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
</style>
