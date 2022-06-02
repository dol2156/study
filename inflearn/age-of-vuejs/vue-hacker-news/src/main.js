import '@/assets/css/reset.css';
import {createApp} from 'vue';
import App from './App.vue';
import router_index from '@/routes/index';
import {createPinia} from "pinia";
import {useCommonStore} from "@/store/common";

const app = createApp(App);
app.use(router_index);
app.use(createPinia());
app.config.globalProperties.$commonStore = useCommonStore(); // 전역 설정
app.mount('#app');