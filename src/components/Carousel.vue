<template>
  <carousel
    class="carousel"
    :navigationEnabled="true"
    navigationPrevLabel=""
    navigationNextLabel=""
    :perPageCustom="[[320, 1], [760, 2], [1100, 3], [1630, 4]]"
  >
    <slide v-for="item in info" :key="item.id + Math.random()">
      <router-link
        :to="{ name: 'Album', params: { id: item.id } }"
        class="link"
      >
        <img :src="item.images[1].url" />
        <p>{{ item.name }}</p>
      </router-link>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "carouselContainer",
  components: {
    carousel: Carousel,
    slide: Slide
  },
  computed: {
    info() {
      return this.$props.mappedItems;
    }
  },
  props: {
    mappedItems: Array
  }
};
</script>

<style lang="scss">
.VueCarousel-navigation-button {
  top: 40% !important;
}
.VueCarousel-navigation-next {
  outline: none !important;
  height: 64px;
  width: 64px;
  background: url("../assets/arrow-right.png") no-repeat center center;
  background-size: cover;
}
.VueCarousel-navigation-prev {
  outline: none !important;
  height: 64px;
  width: 64px;
  background: url("../assets/arrow-left.png") no-repeat center center;
  background-size: cover;
}
.VueCarousel-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  width: 90%;
  margin: auto;

  p {
    color: #fafafa;
  }
}
</style>
