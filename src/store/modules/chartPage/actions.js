import { getChart } from "../../../services/chartServices";

export const actions = {
  getChart: async ({ commit }, next) => {
    const data = await getChart(next);
    commit("getChart", data);
  }
};
