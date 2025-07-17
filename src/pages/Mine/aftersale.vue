<template>
    <div class="box">
        <h4 class="box_title">我的售后</h4>
        <el-table 
            :data="tableData"
            style="width: 100%;margin-top: 20px;background: transparent;"
        >
            <el-table-column prop="" label="商品">
                <template #default="scope">
                    <div class="flex">
                        <img
                            src="http://124.220.206.154/cache//catalog/demo/Ledger Nano S/屏幕截图 2025-05-03 132258-150x150.png"
                            class="box_img"
                        />
                        demo
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="" label="数量">
                <template #default="scope">
                    1
                </template>
            </el-table-column>
            <el-table-column prop="" label="服务类型">
                <template #default="scope">
                    售后
                </template>
            </el-table-column>
            <el-table-column prop="" label="创建时间" width="180">
                <template #default="scope">
                    2025-07-19 23:18:00
                </template>
            </el-table-column>
            <el-table-column prop="" label="" width="120">
                <template #default="scope">
                     <el-icon
                        style="cursor: pointer;margin-right: 20px;"
                    >
                        <ShoppingCart />
                    </el-icon>
                    <el-icon
                        style="cursor: pointer;"
                    >
                        <Delete />
                    </el-icon>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }
    ]
    
</script>
<style lang="scss" scoped>
@import url('./aftersale.scss');
</style>