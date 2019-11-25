import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  singleAlbum: {},
  artistAlbums: [],
  recommendations: []
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
