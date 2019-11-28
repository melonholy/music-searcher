export const mutations = {
  getSingleAlbum(state, payload) {
    state.singleAlbum = payload;
  },
  getArtistAlbums(state, payload) {
    state.artistAlbums = payload;
  },
  getRecommendations(state, payload) {
    state.recommendations = payload;
  },
  getPlaylist(state, payload) {
    state.playlist = payload;
  }
};
