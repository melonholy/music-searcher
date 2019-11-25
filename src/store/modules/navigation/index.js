import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  newReleases: [],
  categories: [],
  lyrics: {}
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
