import '@/assets/css/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from '@/stores/store'

var app = createApp(App);
app.use(store);
app.mount('#app');
