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
<<<<<<< HEAD:src/components/son.vue
        console.log("$attrs==============>", this.$attrs);
=======
        console.log(" Son ==============>", this.$attrs);
>>>>>>> origin/master:src/components/Son.vue
    },
    methods: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
