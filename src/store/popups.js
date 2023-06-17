export default {
    state: {
        isCatalogVisible: false,
        isHeaderSearchVisible: false
    },
    mutations: {
        setIsCatalogVisible(state, newValue) {
            state.isCatalogVisible = newValue;
        },
        setIsHeaderSearchVisible(state, newValue) {
            state.isHeaderSearchVisible = newValue;
        }
    },
    actions: {
        closeAllPopups({ commit }) {
            commit('setIsCatalogVisible', false);
            commit('setIsHeaderSearchVisible', false);
        }
    },
    namespaced: true
}
