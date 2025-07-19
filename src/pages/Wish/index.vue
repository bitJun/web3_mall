<template>
    <div class="wish_box">
        <h4 class="wish_box_title">{{t('wish.title')}}</h4>
        <p class="wish_box_desc">{{t('wish.desc')}}</p>
    </div>
    <div class="wish_view">
        <!-- <div class="wish_view_title">{{t('goods.title')}}</div> -->
        <goodsList />
    </div>
</template>
<script setup>
import goodsList from '@components/goodsList.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>