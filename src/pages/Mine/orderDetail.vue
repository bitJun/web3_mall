<template>
    <div class="box">
        <h4 class="box_title">
            <img
                src="@assets/back.png"
                class="box_title_back"
            />
            {{t('center.subtitle')}}
            <div class="box_title_action">
                <div class="box_title_action_item active">{{ t('center.toPay') }}</div>
                <div class="box_title_action_item">{{ t('center.cancel') }}</div>
            </div>
        </h4>
        <div class="box_tabs">
            <div class="box_tabs_item w180">{{t('center.orderNo')}}</div>
            <div class="box_tabs_item w214">{{t('center.orderTime')}}</div>
            <div class="box_tabs_item w97">{{t('center.status')}}</div>
            <div class="box_tabs_item w219">{{t('center.orderPrice')}}</div>
            <div class="box_tabs_item w137">{{t('center.paymentType')}}</div>
            <div class="box_tabs_item w109">{{t('center.deliver')}}</div>
        </div>
        <div class="box_info">
            <div class="box_info_item w180">2025071916364</div>
            <div class="box_info_item w214">2025-07-19 09:36:50</div>
            <div class="box_info_item w97">{{t('center.status')}}</div>
            <div class="box_info_item w219">$ 288.00</div>
            <div class="box_info_item w137">PayPal</div>
            <div class="box_info_item w109">固定运费</div>
        </div>
        <div class="box_subtitle"><label></label>{{t('center.addressInfo')}}</div>
        <div class="box_address">
            <div class="box_address_item">{{t('center.deliverAddress')}}</div>
            <div class="box_address_item">{{t('center.payAddress')}}</div>
        </div>
        <div class="box_addressInfo">
            <div class="box_addressInfo_item">
                <p class="box_addressInfo_item_desc">{{t('center.name')}}：派大星</p>
                <p class="box_addressInfo_item_desc">{{t('center.address')}}：北京 北京市</p>
                <p class="box_addressInfo_item_desc">{{t('center.pcode')}}：</p>
            </div>
            <div class="box_addressInfo_item">
                <p class="box_addressInfo_item_desc">{{t('center.name')}}：派大星</p>
                <p class="box_addressInfo_item_desc">{{t('center.address')}}：北京 北京市</p>
                <p class="box_addressInfo_item_desc">{{t('center.pcode')}}：</p>
            </div>
        </div>
        <div class="box_subtitle"><label></label>{{t('center.orderGoods')}}</div>
        <div class="box_goods">
            <div class="box_goods_info">
                <img
                    src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                    class="box_goods_info_img"
                />
                <div>
                    <div class="box_goods_info_name">Ledger Flex</div>
                    <div class="box_goods_info_num">x 1</div>
                </div>
            </div>
            <div class="box_goods_price">$ 288.00</div>
        </div>
        <div class="box_subtitle"><label></label>{{t('center.note')}}</div>
        <div class="box_note">
            123
        </div>
        <div class="box_detail">
            <p>{{t('center.goodsTotal')}}：$ 288.00</p>
            <p>{{t('center.fee')}}：$ 288.00</p>
            <p>{{t('center.discount')}}：$ 288.00</p>
        </div>
        <div class="box_line"></div>
        <div class="box_total">{{t('center.goodsTotal')}}：<span>$ 288.00</span></div>
        <div class="box_action">
            <div class="box_action_item pay">{{t('center.toPay')}}</div>
            <div class="box_action_item cancel">{{t('center.cancel')}}</div>
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
@import url('./orderDetail.scss');
</style>