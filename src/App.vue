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
        <div class="header_view_action_item">
          <img
            src="@assets/search.png"
            class="header_view_action_item_icon"
          />
        </div>
        <div class="header_view_action_item">
          <img
            src="@assets/user.png"
            class="header_view_action_item_icon"
            @click="onGoUrl('/user')"
          />
        </div>
        <img
          src="@assets/cart.png"
          class="header_view_action_item"
          @click="drawer = true"
        />
        <div class="header_view_action_line"></div>
        <div class="header_view_action_item unit">
          {{unit}}&nbsp;
          <div class="header_view_action_item_arrow">
            <el-icon><ArrowDown /></el-icon>
          </div>
          <div class="header_view_action_item_menu">
            <div
              v-for="item in unitList"
              :key="item.id"
              class="header_view_action_item_menu_item"
              @click="onChange(item.name)"
            >
              <img
                :src="item.icon"
                class="header_view_action_item_menu_item_icon"
              />
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="header_view_action_item lang">
          {{locale}}&nbsp;
          <div class="header_view_action_item_arrow">
            <el-icon><ArrowDown /></el-icon>
          </div>
          <div class="header_view_action_item_menu">
            <div
              v-for="item in langList"
              :key="item.id"
              class="header_view_action_item_menu_item"
              @click="onChangeLang(item.lang)"
            >
              {{item.name}}
            </div>
          </div>
        </div>
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
        <div class="cart_view_item_main">
          <p class="cart_view_item_name">Ledger Flex</p>
          <span class="cart_view_item_price">$300.00</span>
          <el-input-number v-model="num" :step="1" />
          <img
            src="@assets/trash.png"
            class="cart_view_item_del"
          />
        </div>
      </div>
    </div>
    <template #footer v-if="!isEmpty">
      <div class="cart_view_footer">
        <el-checkbox
          v-model="checked"
          class="cart_view_footer_checkbox"
        >全选</el-checkbox>
        <div class="cart_view_footer_submit">{{t('cart.toPayment')}}</div>
        <div class="cart_view_footer_cart">{{ t('cart.action') }}</div>
      </div>
    </template>
  </el-drawer>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from "vue";
const { t, locale } = useI18n();
import RMB from '@assets/RMB.png';
import USD from '@assets/USD.png';
import EUR from '@assets/EUR.png';

const router = useRouter();
const unit = ref('USD');
const unitImg = ref({
  'USD': '$',
  '人民币': '￥',
  '欧元': '€'
});

const unitList = ref([
  {
    id: 0,
    name: 'USD',
    icon: USD
  },
  {
    id: 1,
    name: 'RMB',
    icon: RMB
  },
  {
    id: 2,
    name: 'EUR',
    icon: EUR
  }
]);

const langList = ref([
  {
    id: 0,
    name: 'Espanol',
    lang: 'Espanol'
  },
  {
    id: 1,
    name: 'French',
    lang: 'fr'
  },
  {
    id: 2,
    name: 'Indonesia',
    lang: 'Indonesia'
  },
  {
    id: 3,
    name: 'Italiano',
    lang: 'Italiano'
  },
  {
    id: 4,
    name: 'Japanese',
    lang: 'Japanese'
  },
  {
    id: 5,
    name: '간체 중문',
    lang: 'kr'
  },
  {
    id: 6,
    name: 'Русский',
    lang: '​Ру'
  },
  {
    id: 7,
    name: '繁体中文',
    lang: 'zhCN'
  },
  {
    id: 8,
    name: 'Deutsch',
    lang: 'Deutsch'
  },
  {
    id: 9,
    name: '中文',
    lang: 'zh'
  },
  {
    id: 10,
    name: 'English',
    lang: 'en'
  }
])

const onChangeLang = (lang) => {
  locale.value = lang;
}

const keyword = ref('');
const drawer = ref(false);
const num = ref(5);
const direction = ref('rtl');
const isEmpty = ref(false); // 是否为空
const checked = ref(false); // 是否为空

const search = () => {

}

const onChange = (name) => {
  unit.value = name;
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
.el-drawer__body {
  padding: 0 2.4rem;
}
</style>
<style lang="scss" scoped>
@import url(./app.scss);
</style>
