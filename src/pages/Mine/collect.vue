<template>
    <div class="collect_box">
        <h4 class="collect_box_title">{{t('center.collect')}}</h4>
        <div class="collect_box_thead">
            <div class="collect_box_thead_th w700">{{t('center.product')}}</div>
            <div class="collect_box_thead_th w280">{{t('center.price')}}</div>
        </div>
        <div class="collect_box_tbody">
            <div class="collect_box_tr" v-for="(item, index) in list" :key="index">
                <div class="collect_box_tr_td w700">
                    <img
                        src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                        class="collect_box_tr_td_img"
                    />
                    Ledger Flex
                </div>
                <div class="collect_box_tr_td price w280">$ 288.00</div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();
    const router = useRouter();

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
    
</script>
<style lang="scss" scoped>
@import url('./collect.scss');
</style>