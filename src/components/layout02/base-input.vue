<template>
    <label for>
        Base
        <input
            type="text"
            @focus="$emit('onBaseFocus',$event.target.value)"
            @input="$emit('onBaseInput',$event.target.value)"
        >
    </label>
</template>

<script>
export default {
    name: "base-input", //组件名
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
