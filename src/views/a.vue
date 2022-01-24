<template>
<div>
    <p>{{title}}-{{names}}</p>
    <input type="text" :value="names" @input="(val) => $emit('update:names', val.target.value)">

    <div style="margin-top: 20px;">
    <div style="margin-top: 5px;"  v-for="(value, key, index) in person" :key="index">
         <input type="text" ref="p" :value="value" @input="(val) => onInput(val,key,index)">
    </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        title:String,
        names:String,
        person: {
            type: Object,
            default: () => {}
        }
    },

    data(){
        return {

        }
    },

    methods:{
        onInput(val, key,index){
            this.$emit(`update:person`, {...this.person, [key]: val.target.value})
            this.$nextTick(() => {
                this.$refs.p[index].focus();
            },10)
        },
    },

    mounted() {
        // console.log(this.title, this.name);
    }

}
</script>
