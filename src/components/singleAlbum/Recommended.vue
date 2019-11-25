<template>
  <section class="carousel-container">
    <p>Recommended</p>
    <carousel-container :mappedItems="recomendationsComp" />
  </section>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import carouselContainer from "../Carousel";

export default
@Component({
  props: {
    recomendations: Array,
    artistId: String
  },
  components: {
    carouselContainer
  }
})
class Recommended extends Vue {
  get recomendationsComp() {
    const data = this.$props.recomendations
      .filter(item => {
        return item.artists[0].id !== this.$props.artistId;
      })
      .map(item => {
        return item.album;
      });
    return data;
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
