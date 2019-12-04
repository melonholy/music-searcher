export const mutations = {
  getChart(state, payload) {
    if (state.chart.items && payload.offset !== 0) {
      payload.items = [...state.chart.items, ...payload.items];
    }
    state.chart = payload;
  }
};
