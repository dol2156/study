import '@/assets/css/reset.css';
import {createApp} from 'vue';
import App from './App.vue';
import axios from 'axios';
import ArrayUtil from "@/plugins/ArrayUtil";
import JsonUtil from "@/plugins/JsonUtil";

const app = createApp(App);
app.config.globalProperties.$axios = axios; // 전역 설정
app.use(ArrayUtil);
app.use(JsonUtil);
app.mount('#app');
