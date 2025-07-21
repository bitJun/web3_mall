<template>
    <div class="box">
        <h4 class="box_title">我的订单</h4>
        <div class="box_tabs">
            <div
                :class="['box_tabs_item', { active: item.id === currentId }]"
                v-for="item in tablsit"
                :key="item.id"
            >
                {{item.name}}
            </div>
        </div>
        <div class="box_list">
            <div
                class="box_list_item"
                v-for="(item, index) in list"
                :key="index"
            >
                <div class="box_list_item_time">
                    2025-07-19 09:36:50 {{t('center.orderNo')}}：2025071916364
                </div>
                <div class="box_list_item_main">
                    <div class="box_list_item_main_td w383">
                        <img
                            src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                            class="box_list_item_main_td_img"
                        />
                        <div class="detail">
                            <div class="detail_name">Ledger Flex</div>
                            <div class="detail_num">x 1</div>
                        </div>
                    </div>
                    <div class="box_list_item_main_td w122">
                        $ 288.00
                    </div>
                    <div class="box_list_item_main_td w200">
                        <span>待支付</span>
                    </div>
                    <div class="box_list_item_main_td flex flex1">
                        <div class="pay">去支付</div>
                        <div class="info">取消订单</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    const router = useRouter();
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();

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
    const currentId = ref('0');

    const list = [
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