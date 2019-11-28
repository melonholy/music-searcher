import { getPlaylistByCategory } from "../../../services/categoryServices";

export const actions = {
  getPlaylistByCategory: async ({ commit }, id) => {
    const {
      playlists: { items }
    } = await getPlaylistByCategory(id);
    commit("getPlaylistByCategory", items);
  }
};
