export const mutations = {
  getNewReleases(state, payload) {
    if (state.newReleases.items && payload.offset !== 0) {
      payload.items = [...state.newReleases.items, ...payload.items];
    }
    state.newReleases = payload;
  },
  getCategories(state, payload) {
    state.categories = payload;
  },
  getLyrics(state, payload) {
    state.lyrics = payload;
  }
};
