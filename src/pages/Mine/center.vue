<template>
    <div class="center_box">
        <div class="center_box_tabs">
            <div class="center_box_tabs_item">
                <img
                    src="@assets/waitPay.png"
                    class="center_box_tabs_item_icon"
                />
                <div class="center_box_tabs_item_main">
                    <div class="center_box_tabs_item_main_num">1</div>
                    <div class="center_box_tabs_item_main_title">{{t('center.waitPay')}}</div>
                </div>
            </div>
            <div class="center_box_tabs_item">
                <img
                    src="@assets/waitDevely.png"
                    class="center_box_tabs_item_icon"
                />
                <div class="center_box_tabs_item_main">
                    <div class="center_box_tabs_item_main_num">10</div>
                    <div class="center_box_tabs_item_main_title">{{t('center.waitDeliver')}}</div>
                </div>
            </div>
            <div class="center_box_tabs_item">
                <img
                    src="@assets/waitPay.png"
                    class="center_box_tabs_item_icon"
                />
                <div class="center_box_tabs_item_main">
                    <div class="center_box_tabs_item_main_num">10</div>
                    <div class="center_box_tabs_item_main_title">{{t('center.waitReceive')}}</div>
                </div>
            </div>
            <div class="center_box_tabs_item">
                <img
                    src="@assets/waitDevely.png"
                    class="center_box_tabs_item_icon"
                />
                <div class="center_box_tabs_item_main">
                    <div class="center_box_tabs_item_main_num">10</div>
                    <div class="center_box_tabs_item_main_title">{{t('center.waitAfterSale')}}</div>
                </div>
            </div>
        </div>
        <div class="center_box_section">
            <div class="center_box_section_title">
                {{t('center.title')}}
                <div class="center_box_section_title_all">
                    {{t('center.all')}}
                    <img
                        src="@assets/arrowIcon.png"
                        class="center_box_section_title_all_icon"
                    />
                </div>
            </div>
            <div class="center_box_section_line"></div>
            <div class="center_box_section_list">
                <div
                    class="center_box_section_list_item"
                    v-for="item in list"
                    :key="item"
                >
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();
    const router = useRouter();

    const list = ref([1,2,3,4,5]);
    
</script>
<style lang="scss" scoped>
@import url('./center.scss');
</style>