<template>
    <div>
      11122233344445553334445544433
        <!-- <vue-form-generator
            :schema="schema"
            :model="model"
            :options="options"
        ></vue-form-generator> -->
    </div>
</template>

<script>
// import VueFormGenerator from "vue-form-generator";

export default {
    components: {
        // VueFormGenerator
    },
    data() {
        return {
            schema: {
                title: "用户信息",
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        title: "姓名"
                    },
                    email: {
                        type: "string",
                        title: "邮箱"
                    },
                    phone: {
                        type: "string",
                        title: "手机号"
                    },
                    gender: {
                        type: "string",
                        title: "性别",
                        enum: ["male", "female"],
                        enumNames: ["男", "女"]
                    },
                    age: {
                        type: "integer",
                        title: "年龄",
                        minimum: 0,
                        maximum: 120
                    }
                },
                required: ["name", "email"]
            },
            model: {},
            options: {}
        };
    }
};
</script>
<style lang="scss"></style>
