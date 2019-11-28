import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  category: []
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
