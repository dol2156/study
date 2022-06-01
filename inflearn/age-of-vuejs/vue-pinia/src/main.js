import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import {commonStore} from "@/stores/commomStore";
import {counterStore} from "@/stores/counterStore";

//createApp(App).mount('#app')
const app = createApp(App);
app.use(createPinia());
app.config.globalProperties.$commonStore = commonStore(); // 전역 설정
app.config.globalProperties.$counterStore = counterStore(); // 전역 설정
app.mount('#app');
