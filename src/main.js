import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import './style.css';
import router from './router.js';
import { createPinia } from 'pinia';
import App from './App.vue';
import en from './locales/en.json';
import zh from './locales/zh.json';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, zh }
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
