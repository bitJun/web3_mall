<template>
    <div class="confirm_box">
        <div class="confirm_box_main">
            <div class="confirm_box_main_title">
                配送地址
            </div>
            <div class="confirm_box_main_title">
                支付方式
            </div>
            <div class="confirm_box_main_pay">
                <div
                    :class="['confirm_box_main_pay_item', payId == item.id ? 'active' : '']"
                    v-for="(item, index) in payList"
                    :key="index"
                    @click="payId = item.id"
                >
                    <span :class="['radio', payId == item.id ? 'active' : '']"></span>
                    <img
                        :src="item.img"
                        class="confirm_box_main_pay_item_img"
                    />
                    <div class="confirm_box_main_pay_item_info">
                        <p class="confirm_box_main_pay_item_info_name">{{item.name}}</p>
                        <p class="confirm_box_main_pay_item_info_desc">{{item.value}}&nbsp;&nbsp;<span>{{item.desc}}</span></p>
                    </div>
                </div>
            </div>
            <div class="confirm_box_main_title">
                配送方式
            </div>
            <div
                :class="['confirm_box_main_delivery', deliveryId == 1 ? 'active' : '']"
                @click="deliveryId = 1"
            >
                <span :class="['radio', deliveryId == 1 ? 'active' : '']"></span>
                <img
                    src="http://124.220.206.154/cache/plugin/_flat_shipping/image/logo-100x100.png"
                    class="confirm_box_main_delivery_img"
                />
                <div class="confirm_box_main_delivery_info">
                    <p class="confirm_box_main_delivery_info_name">固定运费</p>
                    <p class="confirm_box_main_delivery_info_desc">按订单总额收取固定运费</p>
                </div>
            </div>
            <div class="confirm_box_main_title">
                订单备注
            </div>
            <textarea
                class="confirm_box_main_textarea"
                placeholder="请输入订单备注"
            />
        </div>
        <div class="confirm_box_section">
            <div class="confirm_box_main_title">购物车总数</div>
            <div class="confirm_box_section_item">
                <div class="confirm_box_section_item_info">
                    <img
                        src="http://124.220.206.154/cache//catalog/demo/Ledger Flex/屏幕截图 2025-04-30 172738-100x100.png"
                        class="confirm_box_section_item_info_img"
                    />
                    Ledger Flex
                </div>
                <div class="confirm_box_section_item_price">
                    <p class="confirm_box_section_item_price_value">$310.00</p>
                    <p class="confirm_box_section_item_price_num">x 1</p>
                </div>
            </div>
            <div class="confirm_box_section_main">
                <div class="confirm_box_section_main_item">
                    <label>商品总计</label>
                    $300.00
                </div>
                <div class="confirm_box_section_main_item">
                    <label>运费</label>
                    $300.00
                </div>
                <div class="confirm_box_section_main_item">
                    <label>会员优惠</label>
                    $300.00
                </div>
                <div class="confirm_box_section_main_item">
                    <label>应付总金额</label>
                    <span>$300.00</span>
                </div>
            </div>
            <div class="confirm_box_section_action">提交订单</div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { ref } from "vue";
const { t, locale } = useI18n();

const router = useRouter();

const payId = ref(null);
const deliveryId = ref(null);
const payList = ref([
    {
        id: 0,
        img: 'http://124.220.206.154/cache/plugin/_paypal/image/logo-100x100.png',
        name: 'PayPal',
        value: 'paypal',
        desc: 'PayPal Developer'
    },
    {
        id: 1,
        img: 'http://124.220.206.154/cache/plugin/_stripe/image/logo-100x100.png',
        name: 'Stripe 支付',
        value: 'Stripe 支付',
        desc: 'Stripe'
    },
    {
        id: 2,
        img: 'http://124.220.206.154/cache/plugin/_bitpay/image/logo-100x100.png',
        name: 'BitPay',
        value: 'BitPay 支付',
        desc: 'BitPay'
    }
])

</script>
<style lang="scss" scoped>
    @import url('./index.scss');
</style>
