import { createApp } from 'vue';
import App from './App.vue';
import Vue3TouchEvents from 'vue3-touch-events';
import router from '@/router';
import store from '@/store';

createApp(App)
	.use(Vue3TouchEvents)
	.use(store)
	.use(router)
	.mount('#app');
