<template>
    <span class="B">我是B组件</span>
</template>
<script>
export default {
    name: "",
    components: {},
    props: {
        top: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {};
    },
    watch: {
        top: {
            immediate: true,
            deep: true,
            handler(val, oldVal) {
                console.log(val === oldVal);
            }
        }
    },
    created() {},
    beforeMount() {},
    mounted() {},
    methods: {},
    computed: {}
};
</script>
<style lang="scss" scoped>
.B {
    background: gray;
}
</style>
