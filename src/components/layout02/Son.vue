<template>
    <div class="content">
        <ul>
            <li>我是第三层</li>
            <li>我是第三层</li>
            <li>我是第三层</li>
        </ul>
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
