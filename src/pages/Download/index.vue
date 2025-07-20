<template>
    <div class="download_box">
        <img
            src="@assets/download_banner.png"
            class="download_box_img"
        />
        <div class="download_box_info">
            <div class="download_box_info_name">{{t('download.name')}}</div>
            <div class="download_box_info_desc">{{t('download.desc1')}}</div>
            <div class="download_box_info_desc">{{t('download.desc2')}}</div>
            <div class="download_box_info_tip">{{t('download.tip')}}</div>
            <div class="download_box_info_list">
                <div 
                    class="download_box_info_list_item"
                    v-for="item in list"
                    :key="item.id"
                    @mouseover="onMouseover(item.id)"
                    @mouseout="onMouseout(item.id)"
                >
                    <img
                        :src="item.currentImg"
                        class="download_box_info_list_item_img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import ios from '../../assets/ios.png';
import iosOn from '../../assets/ios_on.png';
import andriod from '../../assets/andriod.png';
import andriodOn from '../../assets/andriod_on.png';
import windows from '../../assets/windows.png';
import windowsOn from '../../assets/windows_on.png';
import macos from '../../assets/macos.png';
import macosOn from '../../assets/macos_on.png';
import linux from '../../assets/linux.png';
import linuxOn from '../../assets/linux_on.png';
const list = ref([
    {
        id: 0,
        currentImg: ios,
        img: ios,
        hoverImg: iosOn,
    },
    {
        id: 1,
        currentImg: andriod,
        img: andriod,
        hoverImg: andriodOn,
    },
    {
        id: 2,
        currentImg: windows,
        img: windows,
        hoverImg: windowsOn,
    },
    {
        id: 3,
        currentImg: macos,
        img: macos,
        hoverImg: macosOn,
    },
    {
        id: 4,
        currentImg: linux,
        img: linux,
        hoverImg: linuxOn,
    }
])

const onMouseover = (id) => {
    list.value = list.value.map(item=>{
        item.currentImg = item.img;
        if (item.id == id) {
            item.currentImg = item.hoverImg;
        }
        return item;
    })
}

const onMouseout = (id) => {
    list.value = list.value.map(item=>{
        item.currentImg = item.img;
        if (item.id == id) {
            item.currentImg = item.img;
        }
        return item;
    })
}
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>