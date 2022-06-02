import '@/assets/css/reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import router_index from '@/routes/index'

const app = createApp(App);
app.use(router_index);
app.mount('#app');