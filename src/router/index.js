import Vue from "vue";
import VueRouter from "vue-router";

import { getAccessToken } from "../services/authServices";

import TopChart from "../views/TopChart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TopChart",
    component: TopChart
  },
  {
    path: "/new_releases",
    name: "New Releases ",
    component: () => import("../views/NewReleases.vue")
  },
  {
    path: "/categories",
    name: "Categories ",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/album/:id",
    name: "Album",
    component: () => import("../components/singleAlbum/SingleAlbum.vue")
  },
  {
    path: "/lyrics",
    name: "LyricsPage",
    children: [
      {
        path: "/lyrics/:artist/:title",
        name: "Track Lyrics",
        component: () => import("../views/Lyrics.vue")
      }
    ],
    component: () => import("../views/Lyrics.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  await getAccessToken();
  return next();
});
export default router;
