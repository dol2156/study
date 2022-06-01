import '@/assets/css/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import {useCommonStore} from "@/stores/common";

const app = createApp(App);
app.use(createPinia());
app.config.globalProperties.$commonStore = useCommonStore(); // 전역 설정
app.mount('#app');
