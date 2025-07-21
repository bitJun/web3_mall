import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import './style.css';
import router from './router.js';
import { createPinia } from 'pinia';
import './rem.js';
import App from './App.vue';
import en from './locales/en.json';
import zh from './locales/zh.json';
import Py from './locales/Py.json';
import Deutsch from './locales/Deutsch.json';
import Espanol from './locales/zh.json';
import fr from './locales/fr.json';
import Indonesia from './locales/Indonesia.json';
import Italiano from './locales/Italiano.json';
import Japanese from './locales/Japanese.json';
import kr from './locales/kr.json';
import zhCN from './locales/zh-CN.json';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    Py,
    Deutsch,
    Espanol,
    fr,
    Indonesia,
    Italiano,
    Japanese,
    kr,
    zhCN,
  }
});
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(pinia);
app.use(ElementPlus);

app.use(i18n);
app.mount('#app');
