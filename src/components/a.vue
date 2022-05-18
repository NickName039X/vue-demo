<template>
    <div class="A">
        <B :top="top" />
        <button @click="change">click me</button>
    </div>
</template>
<script>
import B from "./b.vue";
export default {
    name: "",
    components: { B },
    props: [""],
    data() {
        return {
            top: {
                name: "fangsheng",
                age: 18
            }
        };
    },
    watch: {},
    created() {},
    beforeMount() {},
    mounted() {},
    methods: {
        change() {
            this.top.name = '小米';
            // this.top = {
            //     ...this.top,
            //     age: 20
            // };
        }
    },
    computed: {}
};
</script>
<style lang="scss" scoped>
.A {
    background: pink;
    padding: 20px;
}
</style>
