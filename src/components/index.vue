<template>
    <div id="app">
        hello，欢迎你学习vue。
    </div>
</template>

<script>
    import Parent from "./parent.vue";
    import Child from "./child.vue";
    import mixin from "../../src/mixin"

    export default {
        name: "index",
        data(){
            return {
                message:'waowao'
            }
        },
        props: {
            msg: String
        },
        mixins:[mixin],
        components: {
            Parent,
            Child
        },
        created(){
            //merge test
            console.log('hello组件的钩子被调用了');
            console.log(this.message);
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
