import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  singleAlbum: {},
  artistAlbums: [],
  recommendations: [],
  playlist: {}
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
