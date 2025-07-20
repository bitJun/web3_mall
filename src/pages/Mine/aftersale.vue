<template>
    <div class="box">
        <h4 class="box_title">我的售后</h4>
        <div class="box_thead">
            <div class="box_thead_th w383">{{t('center.product')}}</div>
            <div class="box_thead_th w149">{{t('center.num')}}</div>
            <div class="box_thead_th w154">{{t('center.type')}}</div>
            <div class="box_thead_th w202">{{t('center.createTime1')}}</div>
            <div class="box_thead_th w92">{{t('center.operate1')}}</div>
        </div>
        <div class="box_tbody">
            <div class="box_tr" v-for="(item, index) in list" :key="index">
                <div class="box_tr_td w383">
                    <img
                        src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                        class="box_tr_td_img"
                    />
                    Ledger Flex
                </div>
                <div class="box_tr_td price w149">x 1</div>
                <div class="box_tr_td price w154">保修</div>
                <div class="box_tr_td price w202">2025/07/01</div>
                <div class="box_tr_td del w92">{{t('center.del')}}</div>
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
@import url('./aftersale.scss');
</style>