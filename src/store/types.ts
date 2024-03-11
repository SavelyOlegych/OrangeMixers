import { Module } from "vuex";
import { PopupsState } from "@/store/popups/types";

export interface RootState {
    modules: {
        popups: Module<PopupsState, RootState>
    }
}
