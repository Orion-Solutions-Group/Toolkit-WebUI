import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/main.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueToast from 'vue-toast-notification';
const app = createApp(App);
import router from './router';

app.use(router);
app.use(createPinia());
app.use(VueToast);

app.mount('#app');
