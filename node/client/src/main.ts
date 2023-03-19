import { createApp } from 'vue';
import App from './App.vue';
import Vue3TouchEvents from 'vue3-touch-events';
import router from '@/router';
import store from '@/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder, faFolderMinus, faFolderOpen, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
	faFolder,
	faFolderOpen,
	faFolderPlus,
	faFolderMinus
);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(Vue3TouchEvents)
	.use(store)
	.use(router)
	.mount('#app');
