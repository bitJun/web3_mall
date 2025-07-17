<template>
    <div class="home_view">
        <swiper
            :modules="modules"
            :pagination="{
                clickable: true,
            }"
            :navigation="true"
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            class="home_view_swiper"
        >
            <swiper-slide>
                <img
                    src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                    class="home_view_banner"
                />
            </swiper-slide>
        </swiper>
        <video
            src="http://124.220.206.154/catalog/录屏2025-06-21 10.09.22.mov"
            class="home_view_vedio"
            controls
        />
        <h4 class="home_view_title">{{t('app.tip')}}</h4>
        <div class="home_view_list">
            <div 
                class="home_view_list_item"
                v-for="item in list"
                :key="item"
                @click="onShowDetail(item)"
            >
                
                <img
                    src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                    class="home_view_list_item_img"
                />
                <h2 class="home_view_list_item_name">Ledger Stax</h2>
                <div class="home_view_list_item_info">
                    <span class="home_view_list_item_info_price">$19.00</span>
                    <span class="home_view_list_item_info_sale">销量:200</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const router = useRouter();
const list = ref([1,2,3,4,5,6]);

const modules = ref([Navigation, Pagination]);

const change = () => {
    locale.value = 'zh'
}

const onShowDetail = (id) => {
    router.push(`/goods/${id}`)
}
 const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>