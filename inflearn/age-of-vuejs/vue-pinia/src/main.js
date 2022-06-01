import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import {useCommonStore} from "@/stores/common";
import {useCounterStore} from "@/stores/counter";

//createApp(App).mount('#app')
const app = createApp(App);
app.use(createPinia());
app.config.globalProperties.$commonStore = useCommonStore(); // 전역 설정
app.config.globalProperties.$counterStore = useCounterStore(); // 전역 설정
app.mount('#app');
