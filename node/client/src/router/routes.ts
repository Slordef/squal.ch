import GalleryView from '@/views/client/GalleryView.vue';
import ContactView from '@/views/client/ContactView.vue';
import Error404View from '@/views/client/Error404View.vue';
import ClientView from '@/views/ClientView.vue';
import AdminView from '@/views/AdminView.vue';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import store from '@/store';
import BookCoverView from '@/views/client/BookCoverView.vue';

const connectedMiddleware = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	const connected = await store.dispatch('isConnected');
	if (!connected) {
		next('/admin/login');
	}
	next();
};

export const routes = [
	{
		path: '/admin',
		component: AdminView,
		children: [
			{
				path: 'login',
				name: 'Login',
				component: () => import('@/views/admin/LoginView.vue'),
			},
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/admin/DashboardView.vue'),
				beforeEnter: connectedMiddleware
			},
			{
				path: 'images',
				name: 'Images',
				component: () => import('@/views/admin/ImagesView.vue'),
				beforeEnter: connectedMiddleware
			},
			{
				path: 'settings',
				name: 'Settings',
				component: () => import('@/views/admin/SettingsView.vue'),
				beforeEnter: connectedMiddleware
			},
			{ path: '', redirect: '/admin/login' }
		]
	},
	{
		path: '/',
		component: ClientView,
		children: [
			// { path: '/', name: 'Home', component: HomeView },
			{ path: '/', name: 'Gallery', component: GalleryView },
			{ path: 'book-cover', name: 'Book Cover', component: BookCoverView },
			{ path: 'contact', name: 'Contact', component: ContactView },
		]
	},
	{ path: '/:pathMatch(.*)*', name: '404', component: Error404View },
];