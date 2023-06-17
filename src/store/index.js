import { createStore } from 'vuex';
import Popups from '@/store/popups';

export default createStore({
    modules: {
        popups: Popups
    }
});
