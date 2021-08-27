<template>
<div>
  <p>{{a}}</p>
</div>
</template>

<script>
 export default {
    name:'index',
    props:{
        status:{
            type: Number,
            default: 0,
        }
    },
    data(){
        return {
            a:1
        }
    },
    created(){
        console.log(this);
    },
    mounted() {
        this.a++;
        console.log(this.$options.data());//可以获取data初始化的值
        console.log(this.$options.methods);
        console.log(this.$options.props);
        console.log(this.$options.render);
    },
    methods:{
        post(){

        }
    }
}
</script>

<style lang="scss">
    
</style>