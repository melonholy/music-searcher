<template>
  <transition appear appear-active-class="fade-enter-active">
    <AlbumInfo v-if="!isLoading" :singleAlbum="playlist"> </AlbumInfo>
    <spinner v-else :loading="true"></spinner>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Spinner from "./Spinner";
import AlbumInfo from "./singleAlbum/AlbumInfo";

export default {
  name: "SingleAlbum",
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapState("singleAlbum", ["playlist"])
  },
  methods: {
    ...mapActions("singleAlbum", ["getPlaylist"])
  },
  components: {
    Spinner,
    AlbumInfo
  },
  async created() {
    await this.getPlaylist(this.$route.params.id);
    this.isLoading = false;
  },
  async beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    await this.getPlaylist(to.params.id);
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
