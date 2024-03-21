<template>
    <div class="">
        <el-button class="submit" type="success" v-show="show">提交按钮</el-button>
        <el-button type="primary" @click="toggle">切换</el-button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    props: [""],
    data () {
        return {
            show: false,
        };
    },
    watch: {},
    created () {
        console.log('created');

    },
    beforeMount () {
        console.log('beforeMount');
    },
    mounted () {
        console.log('mounted');
    },
    beforeDestroy () {
        console.log('beforeDestroy');

    },
    destroyed () {
        console.log('destroyed');

    },
    methods: {
        toggle () {
            this.show = !this.show
        }
    },
    computed: {},
};
</script>
<style lang="scss" scoped>
.submit{
    display: inline-block;
}
</style>
