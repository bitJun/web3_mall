<template>
    <div class="mine_box">
        <div class="mine_box_menu">
            <div
                :class="['mine_box_menu_item', route.name == 'User' ? 'active' : '']"
                @click="onGoUrl('/user')"
            >
                个人中心
            </div>
            <div
                :class="['mine_box_menu_item', route.name == 'Order' ? 'active' : '']"
                @click="onGoUrl('/order')"
            >
                我的订单
            </div>
            <div
                :class="['mine_box_menu_item', route.name == 'Address' ? 'active' : '']"
                @click="onGoUrl('/address')"
            >
                我的地址
            </div>
            <div
                :class="['mine_box_menu_item', route.name == 'Collect' ? 'active' : '']"
                @click="onGoUrl('/collect')"
            >
                我的收藏
            </div>
            <div
                :class="['mine_box_menu_item', route.name == 'Aftersale' ? 'active' : '']"
                @click="onGoUrl('/aftersale')"
            >
                我的售后
            </div>
            <div
                class="mine_box_menu_item"
                @click="onGoUrl('')"
            >
                退出登录
            </div>
        </div>
        <div class="mine_box_main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter();
    const route = useRoute();

    const onGoUrl = (url) => {
        router.push(url)
    }
    
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>