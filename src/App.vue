<template>
    <div id="app">
        <ul style="list-style: none">
            <li>
                <router-link to="/hello">hello</router-link>
            </li>
            <li>
                <router-link to="/table">table</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld.vue";
    import Main from "./components/table.vue";
    
    export default {
        name : "app",
        components : {
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
