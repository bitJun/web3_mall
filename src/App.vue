<template>
  <header class="header">
    <div class="header_view">
      <div class="header_view_left">
        <img
          src="http://124.220.206.154/upload/avatar/Yb92e8HwKXnRRaTuSB3vzNvxv3QrE93gy91LNQpi.png"
          class="header_view_logo"
        />
        <el-dropdown>
          <span class="el-dropdown-link">
            $ USD
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>￥&nbsp;人民币</el-dropdown-item>
              <el-dropdown-item>$&nbsp;USD</el-dropdown-item>
              <el-dropdown-item>€&nbsp;欧元</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{t('app.language')}}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>EN</el-dropdown-item>
              <el-dropdown-item>JP</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="header_view_nav">
        <div class="header_view_nav_item">{{t('app.product')}}</div>
        <div class="header_view_nav_item">{{t('app.download')}}</div>
      </div>
      <div class="header_view_action">
        <div class="header_view_search">
          <el-input
            v-model="keyword"
            style="width: 100%"
            placeholder="Please input"
          >
            <template #append style="background: #febd69;">
              <el-icon>
                <Search />
              </el-icon>
            </template>
          </el-input>
        </div>
        <el-icon
          style="cursor: pointer;"
          @click="onGoUrl('/collect')"
        >
          <Star />
        </el-icon>
        <el-icon
          style="cursor: pointer;"
          @click="onGoUrl('/user')"
        >
          <UserFilled />
        </el-icon>
        <el-icon
          style="cursor: pointer;"
          @click="drawer = true"
        >
          <ShoppingCart />
        </el-icon>
      </div>
    </div>
  </header>
  <router-view></router-view>
  <footer class="footer">
    <div class="footer_main">
      <h4 class="footer_main_title">联系我们</h4>
      <div class="footer_main_link">
        support@example.com
      </div>
      <div class="footer_main_link">
        028-xxxxxxxx
      </div>
      <div class="footer_main_link">
        科技撒谎大萨达ia是的撒收到
      </div>
      <div class="footer_main_link">
        https://www.baidu.com
      </div>
    </div>
  </footer>
   <el-drawer
    v-model="drawer"
    title=""
    :direction="direction"
  >
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
import { ref } from "vue";
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

<style lang="scss" scoped>
@import url(./app.scss);
</style>
