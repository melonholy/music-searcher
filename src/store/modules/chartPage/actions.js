import { getChart } from "../../../services/chartServices";

export const actions = {
  getChart: async ({ commit }) => {
    const { items } = await getChart();
    commit("getChart", items);
  }
};
