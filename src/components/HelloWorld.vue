<template>
    <div>
        HelloWorld
    </div>
</template>

<script>
import Parent from "./Parent.vue";
import Child from "./Child.vue";
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: {
        Parent,
        Child
	},
	mounted() {
		console.log(Number.isNaN(1));
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
