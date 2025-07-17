<template>
    <div class="collect_box">
        <h4 class="collect_box_title">我的收藏</h4>
        <el-table 
            :data="tableData"
            style="width: 100%;margin-top: 20px;background: transparent;"
        >
            <el-table-column prop="" label="商品">
                <template #default="scope">
                    <div class="flex">
                        <img
                            src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                            class="collect_box_img"
                        />
                        demo
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="" label="价格">
                <template #default="scope">
                    $200.00
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
@import url('./collect.scss');
</style>