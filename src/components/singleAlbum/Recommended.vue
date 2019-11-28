<template>
  <section class="carousel-container">
    <p>Recommended</p>
    <carousel-container :mappedItems="recomendationsComp" />
  </section>
</template>

<script>
import carouselContainer from "../Carousel";

export default {
  name: "Recommended",
  props: {
    recomendations: Array,
    artistId: String
  },
  computed: {
    recomendationsComp() {
      const data = this.$props.recomendations
        .filter(item => {
          return item.artists[0].id !== this.$props.artistId;
        })
        .map(item => {
          return item.album;
        });
      return data;
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
