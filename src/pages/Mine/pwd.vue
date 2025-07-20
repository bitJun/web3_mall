<template>
    <div class="pwd_box">
        <div class="pwd_box_title">{{ t('center.pwd') }}</div>
        <div class="pwd_box_line"></div>
        <div class="pwd_box_form">
            <div class="pwd_box_form_control">
                <input
                    class="pwd_box_form_control_val"
                    :placeholder="t('center.placeholder1')"
                    type="password"
                />
            </div>
            <div class="pwd_box_form_control">
                <input
                    class="pwd_box_form_control_val"
                    :placeholder="t('center.placeholder2')"
                    type="password"
                />
            </div>
            <div class="pwd_box_form_control">
                <input
                    class="pwd_box_form_control_val"
                    :placeholder="t('center.placeholder3')"
                    type="password"
                />
            </div>
            <div class="pwd_box_form_btn">{{ t('center.submit') }}</div>
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
@import url('./pwd.scss');
</style>