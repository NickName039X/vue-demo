<template>
<div>
    <p>{{title}}-{{names}}</p>
    <input type="text" :value="names" @input="(val) => $emit('update:names', val.target.value)">
</div>
</template>
<script>
export default {
    props:{
        title:String,
        names:String,
    },



    data(){
        return {

        }
    },

    mounted() {
        // console.log(this.title, this.name);
    }

}
</script>
