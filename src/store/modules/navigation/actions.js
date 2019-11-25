import {
  getNewReleases,
  getCategories,
  getLyrics
} from "../../../services/headerService";

export const actions = {
  getNewReleases: async ({ commit }) => {
    const {
      albums: { items }
    } = await getNewReleases();
    commit("getNewReleases", items);
  },
  getCategories: async ({ commit }) => {
    const {
      categories: { items }
    } = await getCategories();
    commit("getCategories", items);
  },
  getLyrics: async ({ commit }, { title, artist }) => {
    const lyrics = await getLyrics(title, artist);
    commit("getLyrics", lyrics);
  }
};
