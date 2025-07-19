<template>
    <div class="product_list">
        <div
            v-for="item in list"
            :key="item"
            class="product_list_item"
            @click="onShowDetail(item)"
        >
            <img
                src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                class="product_list_item_img"
            />
            <h2 class="product_list_item_name">Ledger Stax</h2>
            <div class="product_list_item_info">
                <div class="product_list_item_info_price">USD 288</div>
                <div class="product_list_item_info_sale">{{t('home.sale')}}:21</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const { t, locale } = useI18n();
const router = useRouter();
const list = ref([1,2,3,4]);

const onShowDetail = (id) => {
    router.push(`/goods/${id}`)
}
</script>
<style lang="scss" scoped>
.product_list {
    display: flex;
    gap: 2.6rem;
    &_item {
        width: 31rem;
        height: 43.6rem;
        background: #FFFFFF;
        border-radius: 1.9rem;
        padding: 2.7rem 2.9rem;
        box-sizing: border-box;
        cursor: pointer;
        &_img {
            width: 25.2rem;
            height: 25.2rem;
            margin-bottom: 3.1ren;
        }
        &_name {
            height: 3.3rem;
            line-height: 3.3rem;
            font-family: PingFang SC, PingFang SC;
            font-weight: 600;
            font-size: 2.3rem;
            color: #242426;
            margin-bottom: 2.9rem;
        }
        &_info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &_price {
                padding: 0 0.08rem;
                height: 35px;
                background: #F3EFFE;
                border-radius: 0.04rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: PingFang SC, PingFang SC;
                font-weight: 600;
                font-size: 1.9rem;
                color: #6E4AEB;
            }
            &_sale {
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 1.6rem;
                color: #70707B;
            }
        }
    }
}
</style>