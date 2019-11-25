<template>
  <div v-if="albumsComputed.length > 0" class="carousel-container">
    <p>More albums by this artist</p>
    <carousel-container :mappedItems="albumsComputed" />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import carouselContainer from "../Carousel";

export default
@Component({
  props: {
    albums: Array
  },
  components: {
    carouselContainer
  }
})
class MoreAlbumsByArtist extends Vue {
  get albumsComputed() {
    return this.$props.albums.filter(
      album => album.id !== this.$route.params.id
    );
  }
}
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
