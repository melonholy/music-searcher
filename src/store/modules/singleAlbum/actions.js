import {
  getSingleAlbumInfo,
  getArtistAlbums,
  getRecommendations
} from "../../../services/singleAlbumServices";

export const actions = {
  getSingleAlbum: async ({ commit }, id) => {
    const data = await getSingleAlbumInfo(id);
    commit("getSingleAlbum", data);
  },
  getArtistAlbums: async ({ commit }, id) => {
    const { items } = await getArtistAlbums(id);
    commit("getArtistAlbums", items);
  },
  getRecommendations: async ({ commit }, id) => {
    const { tracks } = await getRecommendations(id);
    commit("getRecommendations", tracks);
  }
};
