<template>
  <main>
    <span class="chart-title">Top chart</span>
    <section class="track-container">
      <article v-for="track in chart.items" :key="track.id" class="track">
        <img :src="image(track)" />
        <div class="title">
          <span class="artist">{{ artist(track) }}</span>
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
  data() {
    return {
      scrolledToBottom: true,
      isLoadingMore: null
    };
  },
  computed: {
    ...mapState("chartPage", ["chart"])
  },
  methods: {
    ...mapActions("chartPage", ["getChart"]),
    image(track) {
      return track.track.album.images[0].url;
    },
    artist(track) {
      return track.track.artists[0].name;
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          window.scrollY + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.chart.next && this.scrolledToBottom) {
            this.scrolledToBottom = false;
            this.getChart(this.chart.next).then(
              () => {
                this.scrolledToBottom = true;
              },
              error => {
                console.log(error);
              }
            );
          }
        }
      };
    }
  },
  created() {
    this.getChart(this.chart.next);
  },
  mounted() {
    this.scroll();
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
  width: 98%;
  margin: 0 auto;
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
