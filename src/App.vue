<template>
  <header class="header">
    <div class="header_view">
      <img
        src="@assets/logo.png"
        class="header_view_logo"
      />
      <div class="header_view_nav">
        <div class="header_view_nav_item" @click="onGoUrl('/')">{{t('app.home')}}</div>
        <div class="header_view_nav_item" @click="onGoUrl('/download')">{{t('app.app')}}</div>
        <div class="header_view_nav_item" @click="onGoUrl('/goods')">{{t('app.product')}}</div>
        <div class="header_view_nav_item" @click="onGoUrl('/wish')">{{t('app.like')}}</div>
      </div>
      <div class="header_view_action">
        <img
          src="@assets/search.png"
          class="header_view_action_item"
        />
        <img
          src="@assets/user.png"
          class="header_view_action_item"
          @click="onGoUrl('/user')"
        />
        <img
          src="@assets/cart.png"
          class="header_view_action_item"
          @click="drawer = true"
        />
        <div class="header_view_action_line"></div>
      </div>
    </div>
  </header>
  <router-view></router-view>
  <footer class="footer">
    <div class="footer_main">
      <h4 class="footer_main_title">联系我们</h4>
      <div class="footer_main_tip">可以在我们的博客查看公告</div>
      <div class="footer_main_link">
        媒体联系：<span>media@ledger.com</span>
      </div>
      <div class="footer_main_concat">
        <div class="footer_main_concat_f">
          <img
            src="@assets/f.png"
            class="footer_main_concat_f_icon"
          />
        </div>
        <img
          src="@assets/x.png"
          class="footer_main_concat_item"
        />
        <img
          src="@assets/i.png"
          class="footer_main_concat_item"
        />
        <img
          src="@assets/youtube.png"
          class="footer_main_concat_item"
        />
        <img
          src="@assets/douyin.png"
          class="footer_main_concat_item"
        />
      </div>
    </div>
    <div class="footer_info">
      <div class="footer_info_title">订阅我们的时事通讯</div>
      <div class="footer_info_desc">支持新币种，博客更新和独家优惠直接发送到您的收件箱</div>
      <div class="footer_info_action">
        <input
          class="footer_info_action_input"
          placeholder="请输入您的电子邮箱"
        />
        <div class="footer_info_action_btn">
          订阅新闻
          <img
            src="@assets/arrow.png"
            class="footer_info_action_btn_icon"
          />
        </div>
      </div>
      <div class="footer_info_tip">
        您的电子邮件地址仅用于向您发送我们的新闻通讯、最新资讯和优惠信息。您可以随时通过新闻通讯中的链接取消订阅。 了解更多关于我们如何管理您的数据和您的权利。
      </div>
    </div>
  </footer>
  <el-drawer
    v-model="drawer"
    :show-close="false"
    title=""
    :direction="direction"
    width="465px"
  
  >
    <template #header>
      <div class="drawer_header">
        <div class="drawer_header_main">
          购物车
          <span></span>
          <img
            class="drawer_header_icon"
            src="@assets/close.png"
          />
        </div>
      </div>
    </template>
    <div class="isEmpty" v-if="isEmpty">
      <el-icon
        style="cursor: pointer; font-size: 24px;"
        @click="drawer = true"
      >
        <ShoppingCart />
      </el-icon>
      <div class="isEmpty_action" @click="drawer = false">去购物</div>
    </div>
    <div class="cart_view" v-else>
      <div class="cart_view_item">
        <el-checkbox
          v-model="checked"
          class="cart_view_item_checkbox"
        ></el-checkbox>
        <img
          src="http://124.220.206.154/cache//catalog/demo/Ledger Nano S/屏幕截图 2025-05-03 132258-150x150.png"
          class="cart_view_item_img"
        />
        <span class="cart_view_item_price">$300.00</span>
        <el-input-number v-model="num" :step="1" />
        <el-icon class="cart_view_item_del">
          <Delete />
        </el-icon>
      </div>
    </div>
    <template #footer v-if="!isEmpty">
      <div class="cart_view_footer">
        <el-checkbox
          v-model="checked"
          class="cart_view_footer_checkbox"
        >全选</el-checkbox>
        <div>
          <span class="cart_view_footer_total">总计：$300.00</span>
          <el-button
            type="primary"
            class="cart_view_footer_button"
            @click="onGoUrl('/confirm')"
          >
            去结算
          </el-button>
        </div>
      </div>
    </template>
  </el-drawer>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from "vue";
const { t, locale } = useI18n();

const router = useRouter();

const keyword = ref('');
const drawer = ref(false);
const num = ref(5);
const direction = ref('rtl');
const isEmpty = ref(false); // 是否为空
const checked = ref(false); // 是否为空

const changeLang = (lang) => {
  locale.value = lang; // 切换语言（如 'en' 或 'zh'）
};

const search = () => {

}

const onGoUrl = (url) => {
  router.push(url)
}
</script>
<style>
.el-drawer__header {
  padding: 0;
  box-sizing: border-box;
}
</style>
<style lang="scss" scoped>
@import url(./app.scss);
</style>
