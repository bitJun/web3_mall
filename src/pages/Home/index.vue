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
                    src="http://124.220.206.154/catalog/demo/中文首页/屏幕截图 2025-06-12 130353.png"
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
                    src="http://124.220.206.154/cache//catalog/demo/Ledger%20Stax/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-06-10%20184613-150x150.png"
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