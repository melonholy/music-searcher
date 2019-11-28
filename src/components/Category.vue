<template>
  <CardContainer :showSpinner="loading">
    <section class="category" v-for="item in category" :key="item.id">
      <router-link :to="{ name: 'Playlist', params: { id: item.id } }">
        <img :src="item.images[0].url" />
        <section class="name">
          <p>{{ item.name }}</p>
        </section>
      </router-link>
    </section>
  </CardContainer>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { mapActions, mapState } from "vuex";

import CardContainer from "../slots/CardContainer";

export default
@Component({
  computed: {
    ...mapState("categories", ["category"])
  },
  methods: {
    ...mapActions(["getPlaylistByCategory"])
  },
  components: {
    CardContainer
  }
})
class Category extends Vue {
  loading = true;
  created() {
    this.$store.dispatch(
      "categories/getPlaylistByCategory",
      this.$route.params.name
    );
  }
  mounted() {
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  display: flex;
  padding: 10px;
  margin: 5px;
  background-color: #5a4c4ca3;

  &:hover .name {
    display: flex;
  }

  .name {
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 325px;
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
