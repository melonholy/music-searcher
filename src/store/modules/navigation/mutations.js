export const mutations = {
  getNewReleases(state, payload) {
    state.newReleases = payload;
  },
  getCategories(state, payload) {
    state.categories = payload;
  },
  getLyrics(state, payload) {
    state.lyrics = payload;
  }
};
