import '@/assets/css/reset.css'
import {createApp} from 'vue'
import App from './App.vue'
import store from '@/stores/store'
import {createPinia} from 'pinia'
import {useCounterStore} from "@/stores/counter";

var app = createApp(App);
app.use(store);
app.use(createPinia());
app.config.globalProperties.$pinia = useCounterStore(); // 전역 설정
app.mount('#app');
