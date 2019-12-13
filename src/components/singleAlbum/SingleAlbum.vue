<template>
  <transition appear appear-active-class="fade-enter-active">
    <AlbumInfo v-if="!isLoading" :singleAlbum="singleAlbum">
      <MoreAlbumsByArtist :albums="artistAlbums" />
      <Recommended
        v-if="singleAlbum"
        :recomendations="recommendations"
        :artistId="singleAlbum.artists[0].id"
      />
    </AlbumInfo>
    <spinner v-else :loading="true"></spinner>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Spinner from "../Spinner";
import MoreAlbumsByArtist from "./MoreAlbumsByArtist";
import Recommended from "./Recommended";
import AlbumInfo from "./AlbumInfo";

export default {
  name: "SingleAlbum",
  data: function() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapState("singleAlbum", [
      "singleAlbum",
      "artistAlbums",
      "recommendations"
    ])
  },
  methods: {
    ...mapActions("singleAlbum", [
      "getSingleAlbum",
      "getArtistAlbums",
      "getRecommendations"
    ])
  },
  components: {
    Spinner,
    MoreAlbumsByArtist,
    Recommended,
    AlbumInfo
  },
  async created() {
    await this.getSingleAlbum(this.$route.params.id);
    await this.getArtistAlbums(this.singleAlbum.artists[0].id);
    await this.getRecommendations(this.singleAlbum.artists[0].id);
    this.isLoading = false;
  },
  async beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    await this.getSingleAlbum(to.params.id);
    await this.getArtistAlbums(this.singleAlbum.artists[0].id);
    await this.getRecommendations(this.singleAlbum.artists[0].id);
    this.isLoading = false;

    next();
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: appearing 2s;
}

@keyframes appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
