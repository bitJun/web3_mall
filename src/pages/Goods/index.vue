<template>
    <div class="goods_box">
        <div class="goods_box_info">
            <div class="goods_box_info_img">
                <div class="goods_box_info_img_list">
                    <div
                        v-for="item in imgs"
                        :key="item"
                        class="goods_box_info_img_list_single"
                        @click="onChangeImg(item)"
                    >
                        <img
                            :src="item"
                            class="goods_box_info_img_list_single_img"
                        />
                    </div>
                </div>
                <div class="goods_box_info_img_big">
                    <img
                        class="goods_box_info_img_big_img"
                        :src="currentImg"
                    />
                </div>
            </div>
            <div class="goods_box_info_base">
                <h4 class="goods_box_info_base_name">Ledger Nano S Plus</h4>
                <p class="goods_box_info_base_price">
                    <span>$</span>97.33
                </p>
                <div class="goods_box_info_base_property">
                    <label>库存:</label>
                    <span>有货</span>
                </div>
                <div class="goods_box_info_base_property">
                    <label>SKU:</label>
                    <span>BKSKU-JLVS-682</span>
                </div>
                <div class="goods_box_info_base_property">
                    <label>型号:</label>
                    <span>Nano S Plus</span>
                </div>
                <el-input-number v-model="num" :step="1" />
                <div class="goods_box_info_base_action">
                    <div class="goods_box_info_base_action_item addcart">
                        加入购物车
                    </div>
                    <div class="goods_box_info_base_action_item buynow">
                        立即购买
                    </div>
                </div>
                <div class="goods_box_info_base_collect">
                    <el-icon><Star /></el-icon>
                    <span>收藏</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const num = ref(5)
const imgs = ref([
    'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819',
    'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819',
    'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819',
    'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819',
    'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819',
    'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819',
]);

const currentImg = ref('https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819');

const onChangeImg = (img) => {
    currentImg.value = img;
}

</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>