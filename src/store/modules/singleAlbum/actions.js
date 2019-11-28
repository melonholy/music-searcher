import {
  getSingleAlbumInfo,
  getArtistAlbums,
  getRecommendations,
  getPlaylist
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
  },
  getPlaylist: async ({ commit }, id) => {
    const data = await getPlaylist(id);
    commit("getPlaylist", data);
  }
};
