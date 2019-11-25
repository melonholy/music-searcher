<template>
  <main>
    <span class="chart-title">Top chart</span>
    <section class="track-container">
      <article v-for="track in chart" :key="track.id" class="track">
        <img :src="track.track.album.images[0].url" />
        <div class="title">
          <span class="artist">{{ track.track.artists[0].name }}</span>
          <span class="name">{{ track.track.name }}</span>
          <router-link
            :to="{ name: 'Album', params: { id: track.track.album.id } }"
            class="link"
            >Listen here</router-link
          >
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState("chartPage", ["chart"])
  },
  methods: {
    ...mapActions(["getChart"])
  },
  created() {
    this.$store.dispatch("chartPage/getChart");
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("chartPage/getChart");

    next();
  }
};
</script>

<style lang="scss" scoped>
.chart-title {
  margin-left: 45%;
  color: #fff;
  font-size: 80px;
  font-family: "Bebas Neue", cursive;
}
.track-container {
  width: 100%;
  margin: 0 10px;
  background-color: #36363a;

  .track {
    display: flex;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    img {
      width: 40%;
      height: 30%;
    }
    .title {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .artist {
        color: #fafafa;
        font-size: 60px;
        font-family: "Bebas Neue", cursive;
      }
      .name {
        color: #ffffffad;
        font-size: 30px;
        font-family: "Bebas Neue", cursive;
      }
      .link {
        border: 3px solid #ffffffad;
        padding: 10px;
        color: #ffffffad;
      }
    }
  }
}
</style>
