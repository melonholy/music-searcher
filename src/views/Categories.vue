<template>
  <CardContainer :showSpinner="isLoading">
    <section class="category" v-for="item in categories" :key="item.id">
      <router-link :to="{ name: 'Category', params: { name: item.id } }">
        <img :src="item.icons[0].url" alt />
        <section class="name">
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
  name: "Categories",
  props: {
    recomendations: Array,
    artistId: String
  },
  data: function() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapState("navigation", ["categories"])
  },
  components: {
    CardContainer
  },
  methods: {
    ...mapActions(["getCategories"])
  },
  async created() {
    await this.$store.dispatch("navigation/getCategories");
    this.isLoading = false;
  }
};
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
    height: 295px;
    width: 295px;
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
