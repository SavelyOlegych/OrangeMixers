import { createStore, StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import popups from '@/store/popups';

const state: StoreOptions<RootState> = {
    modules: {
        popups,
    }
}

export default createStore(state);
