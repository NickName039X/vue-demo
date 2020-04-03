<template>
    <div class="content">
        Son组件
    </div>
</template>

<script>
export default {
    name: "son", //组件名
    data() {
        return {};
    },
    created() {},
    mounted() {
        console.log("$attrs==============>", this.$attrs);
    },
    methods: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
