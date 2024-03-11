import { Module } from 'vuex';
import { PopupsState } from '@/store/popups/types';
import { RootState } from '@/store/types';

const popups: Module<PopupsState, RootState> = {
    state() {
        return {
            isCatalogVisible: false,
            isHeaderSearchVisible: false
        }
    },
    mutations: {
        setIsCatalogVisible(state, newValue: boolean) {
            state.isCatalogVisible = newValue;
        },
        setIsHeaderSearchVisible(state, newValue: boolean) {
            state.isHeaderSearchVisible = newValue;
        },
    },
    actions: {
        closeAllPopups({ commit }) {
            commit('setIsCatalogVisible', false);
            commit('setIsHeaderSearchVisible', false);
        }
    },
    namespaced: true
}

export default popups;
