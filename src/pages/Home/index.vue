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
        <div class="home_view_product">
            <div class="home_view_product_title">
                {{t('home.title')}}
                <div class="home_view_product_title_btn" @click="onShowList()">
                    {{t('home.shopmall')}}
                    <img
                        src="@assets/arrow.png"
                        class="home_view_product_title_btn_icon"
                    />
                </div>
            </div>
            <goodsList />
            <!-- <div class="home_view_product_list">
                <div
                    v-for="item in list"
                    :key="item"
                    class="home_view_product_list_item"
                >
                    <img
                        src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                        class="home_view_product_list_item_img"
                    />
                    <h2 class="home_view_product_list_item_name">Ledger Stax</h2>
                    <div class="home_view_product_list_item_info">
                        <div class="home_view_product_list_item_info_price">USD 288</div>
                        <div class="home_view_product_list_item_info_sale">{{t('home.sale')}}:21</div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="home_view_vedio">
            <video
                src="http://124.220.206.154/catalog/录屏2025-06-21 10.09.22.mov"
                class="home_view_vedio_url"
                controls
            />
        </div>
        <div class="home_view_ledger">
            <img
                src="@assets/ledger.png"
                class="home_view_ledger_img"
            />
            <div class="home_view_ledger_main">
                <p>
                    {{t('home.use')}}
                    <span class="puper">Ledger</span>
                    {{t('home.wallet')}}
                </p>
                <p>{{t('home.tip')}}</p>
            </div>
        </div>
        <div class="home_view_banner">
            <img
                src="@assets/banner.png"
                class="home_view_banner_img"
            />
        </div>
        <div class="home_view_introduce">
            <div class="home_view_introduce_title">
                <span>Ledger Live</span>{{t('home.introduce')}}
            </div>
            <div class="home_view_introduce_desc">{{t('home.desc')}}</div>
            <div class="home_view_introduce_list">
                <div class="home_view_introduce_list_item">
                    <img
                        src="@assets/icon1.png"
                        class="home_view_introduce_list_item_icon"
                    />
                    <div class="home_view_introduce_list_item_name">{{t('home.name1')}}</div>
                    <div class="home_view_introduce_list_item_desc">{{t('home.desc1')}}</div>
                    <img
                        src="@assets/img1.png"
                        class="home_view_introduce_list_item_img"
                    />
                </div>
                <div class="home_view_introduce_list_item">
                    <img
                        src="@assets/icon2.png"
                        class="home_view_introduce_list_item_icon"
                    />
                    <div class="home_view_introduce_list_item_name">{{t('home.name2')}}</div>
                    <div class="home_view_introduce_list_item_desc">{{t('home.desc2')}}</div>
                    <img
                        src="@assets/img2.png"
                        class="home_view_introduce_list_item_img"
                    />
                </div>
                <div class="home_view_introduce_list_item">
                    <img
                        src="@assets/icon3.png"
                        class="home_view_introduce_list_item_icon"
                    />
                    <div class="home_view_introduce_list_item_name">{{t('home.name3')}}</div>
                    <div class="home_view_introduce_list_item_desc">{{t('home.desc3')}}</div>
                    <img
                        src="@assets/img3.png"
                        class="home_view_introduce_list_item_img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {get} from '@utils/request';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import goodsList from '@components/goodsList.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const router = useRouter();

const modules = ref([Navigation, Pagination]);

const detail = ref({});
const change = () => {
    locale.value = 'zh'
}

const onShowDetail = (id) => {
    router.push(`/goods/${id}`)
}

const onShowList = () => {
    router.push(`/goods`)
}

 const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

onMounted(()=>{
    onLoadData();
});

const onLoadData = () => {
    get('/index')
        .then(res=>{
            let {
                modules
            } = res;
            let keys = Object.keys(modules);
            keys.forEach(key=>{
                detail.value[key] = modules[key];
            })
            console.log('res', res)
        })
}
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>