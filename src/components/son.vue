<template>
    <div class="content">
        {{$attrs}}
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
        console.log(" Son ==============>", this.$attrs);
    },
    methods: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
