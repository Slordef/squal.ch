import { ContactMessage } from '@/intefaces/contact-message';
import { ActionTree } from 'vuex';
import { State } from '@/store/state';
import { api } from '@/store/api';
import { Settings } from '@/intefaces/settings';
import { ArtImage } from '@/intefaces/art-image';
import { ContactResponse } from '@/intefaces/contact-response';
import { LoggedResponse } from '@/intefaces/logged-response';
import { LoginParam, LoginResponse } from '@/intefaces/login';

export const actions: ActionTree<State, State> = {
	apiGet({ dispatch }) {
		dispatch('apiImages');
		dispatch('apiSettings');
	},
	apiSettings({ commit }) {
		return api.get<Settings>('/settings').then(r => {
			commit('SET_SETTINGS', r.data);
		}).catch(err => {
			console.error(err);
		});
	},
	apiImages({ commit }) {
		return api.get<ArtImage[]>('/images').then(r => {
			commit('SET_IMAGES', r.data);
		}).catch(err => {
			console.error(err);
		});
	},
	sendContactMessage(context, contact: ContactMessage) {
		return api.post<ContactResponse>('/contact', { contact }).catch(err => {
			return { success: false, error: err.response?.data?.error || err };
		});
	},
	isConnected() {
		return api.get<LoggedResponse>('/logged')
			.then(r => r.data.success).catch(() => {
				return false;
			});
	},
	login(context, log: LoginParam) {
		try {
			LoginParam.parse(log);
		} catch (e) {
			return false;
		}
		return api.post<LoginResponse>('/login', log).then(r => {
			if (r.status === 200) {
				localStorage.setItem('token', r.data.accessToken);
			}
			return true;
		}).catch(() => {
			return false;
		});
	}
};
