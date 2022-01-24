<template>
    <p>{{title}}-{{names}}</p>
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
