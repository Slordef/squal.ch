import { MutationTree } from 'vuex';
import { State } from '@/store/state';

export const mutations: MutationTree<State> = {
	SET_SETTINGS(state, settings) {
		state.settings = settings;
	},
	SET_IMAGES(state, images) {
		state.images = images;
	}
};
 