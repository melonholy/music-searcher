<template>
  <div v-if="albumsComputed.length > 0" class="carousel-container">
    <p>More albums by this artist</p>
    <carousel-container :mappedItems="albumsComputed" />
  </div>
</template>

<script>
import carouselContainer from "../Carousel";

export default {
  name: "MoreAlbumsByArtist",
  props: {
    albums: Array
  },
  computed: {
    albumsComputed() {
      return this.$props.albums.filter(
        album => album.id !== this.$route.params.id
      );
    }
  },
  components: {
    carouselContainer
  },
  methods: {
    duration(time) {
      return new Date(time).toLocaleTimeString("en-US", {
        minute: "numeric",
        second: "numeric"
      });
    },
    releaseDate(date) {
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  margin: 10px;
  p {
    font-size: 30px;
    font-weight: 600;
    color: #fafafa;
  }
}
</style>
