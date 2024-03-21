<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-tree
                    :props="defaultProps"
                    :data="data"
                    show-checkbox
                >
                </el-tree>
            </template>
        </el-table-column>
        <el-table-column label="商品 ID" prop="id"> </el-table-column>
        <el-table-column label="商品名称" prop="name"> </el-table-column>
        <el-table-column label="描述" prop="desc"> </el-table-column>
    </el-table>
</template>

<style>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    label: "一级 1",
                    children: [
                        {
                            id: 4,
                            label: "二级 1-1",
                            children: [
                                {
                                    id: 9,
                                    label: "三级 1-1-1",
                                },
                                {
                                    id: 10,
                                    label: "三级 1-1-2",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    label: "一级 2",
                    children: [
                        {
                            id: 5,
                            label: "二级 2-1",
                        },
                        {
                            id: 6,
                            label: "二级 2-2",
                        },
                    ],
                },
                {
                    id: 3,
                    label: "一级 3",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",
                label: "label",
            },
            tableData: [
                {
                    id: "12987122",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                },
                {
                    id: "12987123",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                },
                {
                    id: "12987125",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                },
                {
                    id: "12987126",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                },
            ],
        };
    },
    methods: {},
};
</script>
