import Vue from "vue";
import Vuex from "vuex";

import singleAlbum from "./modules/singleAlbum/index";
import navigation from "./modules/navigation/index";
import chartPage from "./modules/chartPage/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    singleAlbum,
    navigation,
    chartPage
  }
});
