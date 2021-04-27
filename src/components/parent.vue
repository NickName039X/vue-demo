<template>
    <div class="container">
        <div>Parent组件</div>
        <child
            :visible.sync="show"
            name="小李"
            msg="xiaoli"
            age="20"
            maxlength="10"
            max="100"
            v-bind="$attrs"
            v-on="$listeners"
            @input="onInputEvent"
            @focus="onFocusEvent"
            @ageInput="onAgeInputEvent"
        ></child>
        <base-input @focus.native="onBaseFocus" @input.native="onBaseInput"></base-input>
    </div>
</template>
<script>
import { get } from "https";
import child from "./child.vue";
import baseInput from './v-model/index';
export default {
    name: "parent", //组件名
    components: {
        child,
        baseInput
    },
    data() {
        return {
            show:true,//是否显示
            list: ['I am parent']
        };
    },
    mounted() {
        let url = "https://jsonplaceholder.typicode.com/users";
        let param = {};
        this.$http.get(url, param).then(res => {
            this.list = res.data;
        });
    },
    created() {},
    methods: {
        onInputEvent(e) {
            console.log(e);
        },
        onFocusEvent(e) {
            console.log("input组件获得了焦点!");
        },
        onAgeInputEvent(e) {
            console.log("age输入了", e);
        },
        onBaseFocus(e){//不生效
            console.log(e.target.value)
        },
        onBaseInput(e){//生效
            console.log(e.target.value)
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    border: 1px solid;
    margin: 20px;
}
</style>
