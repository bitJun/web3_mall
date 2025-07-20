<template>
    <div class="address_box">
        <div class="address_box_title">
            {{ t('center.location') }}
            <div class="address_box_title_action">
                {{ t('center.add') }}
                <img
                    src="@assets/add.png"
                    class="address_box_title_action_icon"
                />
            </div>
        </div>
        <div
            class="address_box_item"
            v-for="item in [1,2,3,4]"
            :key="item"
        >
            <div class="address_box_item_user">王立东&nbsp;&nbsp;19816239876&nbsp;&nbsp;<span>{{t('cart.default')}}</span></div>
            <div class="address_box_item_detail">中国北京市朝阳区盛和街道方大楼街道198号晟和园小区10栋1单元901室</div>
            <div class="address_box_item_action">
                <img
                    src="@assets/edit.png"
                    class="address_box_item_action_icon"
                />
                <img
                    src="@assets/trash.png"
                    class="address_box_item_action_icon"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();
    const router = useRouter();
    
</script>
<style lang="scss" scoped>
@import url('./address.scss');
</style>