import { ActionTree } from 'vuex';
import {RootState} from "@/store/store.state";

export const actions: ActionTree<RootState, RootState> = {
  toggleContextMenu({ commit }: any) {
    commit('TOGGLE_CONTEXTMENU')
  },

  setContextMenu({ commit }: any, collapsed: boolean) {
    commit('SET_CONTEXTMENU', collapsed);
  }
}
