<template>
    <div class="myblock">
        <div>Parent组件</div>
        <Child
            :visible.sync="show"
            name="小李"
            msg="xiaoli"
            age="20"
            maxlength="10"
            v-bind="$attrs"
            max="100"
            v-on="$listeners"
            @input="onInputEvent"
            @focus="onFocusEvent"
            @ageInput="onAgeInputEvent"
        ></Child>
        <base-input @focus.native="onBaseFocus" @input.native="onBaseInput"></base-input>
    </div>
</template>
<script>
import { get } from "https";
import Child from "./Child.vue";
import baseInput from './base-input.vue';
export default {
    name: "Parent", //组件名
    components: {
        Child,
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
.myblock {
    border: 1px solid #cfcfcf;
    width: 100%;
}
</style>
