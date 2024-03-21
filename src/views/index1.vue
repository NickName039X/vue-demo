<template>
    <div class="container">
        <div>
            {{ title }}
        </div>
        <el-table :data="tableData" border style="width: 50%">
            <el-table-column fixed prop="date" label="日1期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓1名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区11111" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地1111址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编1111  " width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操1作" width="100">
                <template slot-scope="scope">
                    <el-button
                        @click="handleClick(scope.row)"
                        type="text"
                        size="small"
                        >查看11121121</el-button
                    >
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(row) {
            console.log(row);
        },
    },

    data() {
        return {
            title: "",
            hasUpdate: false,
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1517 弄",
                    zip: 200333,
                },
            ],
        };
    },

    beforeCreate() {
        this.title = "哈哈";
    },

    created() {},

    mounted() {
        this.hasUpdate = true;
    },

    updated() {
        console.log("updated钩子触发了");
    },
};
</script>
