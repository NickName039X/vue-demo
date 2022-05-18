$<template>
    <div>
        <b :top="top" />
    </div>
</template>
<script>
import b from "./b.vue";
export default {
    name: "",
    components: { b },
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
    methods: {},
    computed: {}
};
</script>
<style lang="" scoped>
* {
    background: blanchedalmond;
}
</style>
