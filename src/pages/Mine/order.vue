<template>
    <div class="box">
        <h4 class="box_title">我的订单</h4>
         <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane
                v-for="item in tablsit"
                :key="item.id"
                :label="item.name"
                :name="item.id"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const activeName = ref('0');

    const tablsit = ref([
        {
            id: '0',
            name: '所有订单'
        },
        {
            id: '1',
            name: '待支付'
        },
        {
            id: '2',
            name: '待发货'
        },
        {
            id: '3',
            name: '待收货'
        },
        {
            id: '4',
            name: '已完成'
        }
    ])

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

    const handleClick = (tab, event) => {
        console.log(tab, event)
    }
    
</script>
<style lang="scss" scoped>
@import url('./order.scss');
</style>