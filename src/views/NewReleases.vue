<template>
  <CardContainer :showSpinner="isLoading">
    <section class="album" v-for="item in newReleases.items" :key="item.id">
      <router-link :to="{ name: 'Album', params: { id: item.id } }">
        <img :src="item.images[1].url" />
        <section class="artist">
          <p>{{ item.artists[0].name }}</p>
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
  data: function() {
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
    ...mapActions(["getNewReleases"]),
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          window.scrollY + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.newReleases.next && this.scrolledToBottom) {
            this.scrolledToBottom = false;
            this.$store
              .dispatch("navigation/getNewReleases", this.newReleases.next)
              .then(
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
    await this.$store.dispatch("navigation/getNewReleases");
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
      margin: 16px 20px;
      font-size: 24px;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>
