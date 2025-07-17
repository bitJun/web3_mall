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
    'http://124.220.206.154/cache//catalog/demo/Ledger Nano S/屏幕截图 2025-05-03 132258-150x150.png',
    'http://124.220.206.154/cache//catalog/demo/Ledger%20Nano%20S/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-05-03%20132310-150x150.png',
    'http://124.220.206.154/cache//catalog/demo/Ledger Nano S/屏幕截图 2025-05-03 132258-150x150.png',
    'http://124.220.206.154/cache//catalog/demo/Ledger%20Nano%20S/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-05-03%20132325-150x150.png',
    'http://124.220.206.154/cache//catalog/demo/Ledger%20Nano%20S/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-05-03%20132319-150x150.png',
    'http://124.220.206.154/cache//catalog/demo/Ledger Nano S/屏幕截图 2025-05-03 132258-150x150.png',
]);

const currentImg = ref('http://124.220.206.154/cache//catalog/demo/Ledger Nano S/屏幕截图 2025-05-03 132258-150x150.png');

const onChangeImg = (img) => {
    currentImg.value = img;
}

</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>