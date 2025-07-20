<template>
    <div class="login_view">
        <p class="login_view_title">首页 / 用户登录与注册</p>
        <div class="login_view_main">
            <div class="login_view_main_form">
                <div class="login_view_main_form_title">{{t('login.login')}}</div>
                <div class="login_view_main_form_box mb12">
                    <div class="login_view_main_form_box_input">
                        <input
                            class="login_view_main_form_box_input_val"
                            :placeholder="t('login.placeholder')"
                            type="text"
                        />
                    </div>
                    <div class="login_view_main_form_box_input">
                        <input
                            class="login_view_main_form_box_input_val"
                            :placeholder="t('login.password')"
                            type="password"
                        />
                    </div>
                </div>
                <div class="login_view_main_form_tip">
                    <img
                        src="@assets/help.png"
                        class="login_view_main_form_tip_icon"
                    />
                    {{t('login.forget')}}
                </div>
                <div class="login_view_main_form_btn">{{t('login.login')}}</div>
            </div>
            <div class="login_view_main_form">
                <div class="login_view_main_form_title">{{t('login.register')}}</div>
                <div class="login_view_main_form_box">
                    <div class="login_view_main_form_box_input">
                        <input
                            class="login_view_main_form_box_input_val"
                            :placeholder="t('login.placeholder')"
                            type="text"
                        />
                    </div>
                    <div class="login_view_main_form_box_input">
                        <input
                            class="login_view_main_form_box_input_val"
                            :placeholder="t('login.password')"
                            type="password"
                        />
                    </div>
                </div>
                <div class="login_view_main_form_btn">{{t('login.register')}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const router = useRouter();
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>