import { createStore } from 'vuex';
import { State, state } from '@/store/state';
import { getters } from '@/store/getters';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

export default createStore<State>({
	state,
	getters,
	mutations,
	actions
});
