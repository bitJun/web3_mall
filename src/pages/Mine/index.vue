<template>
    <div class="mine_box">
        <div class="mine_box_section">
            <div class="mine_box_info">
                <img
                    src="@assets/avator.png"
                    class="mine_box_info_img"
                />
                <p class="mine_box_info_name">nathyliu</p>
                <p class="mine_box_info_desc">nathyliu@gmail.com</p>
            </div>
            <div class="mine_box_menu">
                <div
                    v-for="item in menuList"
                    :key="item.id"
                    @click="onGoUrl(item.url)"
                    :class="['mine_box_menu_item', route.name == item.url ? 'active' : '']"
                >
                    <img
                        :src="item.icon"
                        class="mine_box_menu_item_icon"
                    />
                    {{ item.name }}
                </div>
                <div
                    class="mine_box_menu_action"
                    @click="onLogout()"
                >
                    退出登录
                </div>
            </div>
        </div>
        <div class="mine_box_main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
    import Home from '@assets/home.png';
    import Info from '@assets/info.png';
    import Pwd from '@assets/pwd.png';
    import Order from '@assets/order.png';
    import Loaction from '@assets/location.png';
    import Collect from '@assets/collect.png';
    import Message from '@assets/message.png';
    import { ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();
    const router = useRouter();
    const route = useRoute();

    const menuList = ref([
        {
            id: 0,
            name: t('center.home'),
            icon: Home,
            url: 'Center'
        },
        {
            id: 1,
            name: t('center.info'),
            icon: Info,
            url: 'User'
        },
        {
            id: 2,
            name: t('center.pwd'),
            icon: Pwd,
            url: 'Pwd'
        },
        {
            id: 3,
            name: t('center.order'),
            icon: Order,
            url: 'Order'
        },
        {
            id: 4,
            name: t('center.location'),
            icon: Loaction,
            url: 'Address'
        },
        {
            id: 5,
            name: t('center.collect'),
            icon: Collect,
            url: 'Collect'
        },
        {
            id: 6,
            name: t('center.message'),
            icon: Message,
            url: 'Aftersale'
        }
    ]);

    const onGoUrl = (url) => {
        router.push({name: url})
    }
    
    const onLogout = () => {

    }
    
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>