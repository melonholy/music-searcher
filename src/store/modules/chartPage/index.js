import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  chart: []
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
