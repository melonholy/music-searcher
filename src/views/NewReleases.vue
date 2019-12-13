<template>
  <CardContainer :showSpinner="isLoading">
    <section class="album" v-for="item in newReleases.items" :key="item.id">
      <router-link :to="{ name: 'Album', params: { id: item.id } }">
        <img :src="image(item)" />
        <section class="artist">
          <div class="names">
            <p v-for="(artist, index) in item.artists" :key="artist.name">
              {{ artist.name
              }}{{ index !== item.artists.length - 1 ? "," : "" }}
            </p>
          </div>
          <p>{{ item.name }}</p>
        </section>
      </router-link>
    </section>
  </CardContainer>
</template>

<script>
import { mapActions, mapState } from "vuex";

import CardContainer from "../slots/CardContainer";

export default {
  name: "NewReleases",
  props: {
    recomendations: Array,
    artistId: String
  },
  data() {
    return {
      isLoading: null,
      scrolledToBottom: true
    };
  },
  computed: {
    ...mapState("navigation", ["newReleases"])
  },
  components: {
    CardContainer
  },
  methods: {
    ...mapActions("navigation", ["getNewReleases"]),
    image(album) {
      return album.images[1].url;
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          window.scrollY + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.newReleases.next && this.scrolledToBottom) {
            this.scrolledToBottom = false;
            this.getNewReleases(this.newReleases.next).then(
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
  async created() {
    this.isLoading = true;
    await this.getNewReleases(this.newReleases.next);
    this.isLoading = false;
  },
  async mounted() {
    this.scroll();
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";

.album {
  position: relative;
  display: flex;
  padding: 10px;
  margin: 5px;
  background-color: #5a4c4ca3;

  router-link {
    width: 100%;
  }
  &:hover .artist {
    display: flex;
  }

  .artist {
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 320px;
    width: 320px;
    background-color: #5a4c4ce1;

    p {
      width: 90%;
      text-align: center;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      color: #fff;
    }
    .names {
      width: 90%;
      margin: 16px 0;
      p {
        width: 100%;
      }
    }
  }
}
</style>
