import {
  getNewReleases,
  getCategories,
  getLyrics
} from "../../../services/headerService";

export const actions = {
  getNewReleases: async ({ commit }, next) => {
    const { albums } = await getNewReleases(next);
    commit("getNewReleases", albums);
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
