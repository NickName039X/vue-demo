<template>
  <div class="">
    <div class="header" v-if="expand">
      block 1 <i @click="expand = false">Expand is True</i>
    </div>
    <div class="expand" v-if="!expand" @click="expand = true">
      block 2 <i>Expand is False</i>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: [""],
  data() {
    return {
      expand: true,
    };
  },
  watch: {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style lang='' scoped>
</style>
