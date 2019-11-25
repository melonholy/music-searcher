<template>
  <section>
    <p class="title">Search lyrics</p>
    <input type="text" />
    <spinner v-if="loading" :loading="true" />
    <div v-else-if="this.$route.params.artist" class="text">{{ lyrics }}</div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Spinner from "../components/Spinner";

export default {
  name: "Lyrics",
  components: { Spinner },
  data: function() {
    return { loading: true };
  },
  computed: {
    ...mapState("navigation", ["lyrics"])
  },
  methods: {
    ...mapActions(["getLyrics"])
  },
  async created() {
    if (this.$route.params.artist && this.$route.params.title)
      await this.$store.dispatch("navigation/getLyrics", this.$route.params);
    this.loading = false;
  }
};
</script>

<style>
.title {
  color: #fff;
}
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-family: "Alata", sans-serif;
  white-space: pre;
}
</style>
