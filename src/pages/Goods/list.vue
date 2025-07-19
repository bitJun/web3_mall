<template>
    <div class="goods_view">
        <div class="goods_view_title">{{t('goods.title')}}</div>
        <goodsList />
    </div>
</template>
<script setup>
import goodsList from '@components/goodsList.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>
<style lang="scss" scoped>
@import url('./list.scss');
</style>