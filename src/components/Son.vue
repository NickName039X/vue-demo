<template>
    <div class="content">
        Son组件
    </div>
</template>

<script>
export default {
    name: "Son", //组件名
    data() {
        return {};
    },
    created() {},
    mounted() {
        console.log("Son==================", this.$attrs);
    },
    methods: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style: none;
}
.content {
    background: #ccffff;
}
</style>
