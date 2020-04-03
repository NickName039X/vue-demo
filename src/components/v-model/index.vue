<template>
    <div style="margin:20px 0">
        <label for="myinput">v-model的原理</label>
        <input
            id="myinput"
            type="text"
            @focus="$emit('onBaseFocus',$event.target.value)"
            @input="$emit('onBaseInput',$event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        name: "index", //组件名
        data() {
            return {};
        },
        created() {
        },
        mounted() {
        },
        methods: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    label{
        margin-right: 20px;
    }
    input{
        height: 25px;
        line-height: 25px;
    }
</style>
