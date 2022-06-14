import { createApp } from 'vue'
import App from './App.vue'
import SamplePlugin from '@/plugins/Sample';
import ArrayPlugin from '@/plugins/Array';
import JsonPlugin from '@/plugins/Json';

const app = createApp(App);
app.use(SamplePlugin);
app.use(ArrayPlugin);
app.use(JsonPlugin);
app.mount('#app');
