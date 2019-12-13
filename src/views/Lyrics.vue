<template>
  <section>
    <div class="search-bar">
      <p class="title">Search lyrics</p>
      <div class="input-container">
        <img src="../assets/microphone.png" />
        <input
          type="text"
          v-model="artist"
          placeholder="Artist name..."
          v-on:keyup.enter="searchLyrics"
        />
      </div>
      <div class="input-container">
        <img src="../assets/song.png" />
        <input
          type="text"
          v-model="title"
          placeholder="Song name..."
          v-on:keyup.enter="searchLyrics"
        />
      </div>
      <button @click="searchLyrics" class="search-button">
        Search
      </button>
    </div>
    <spinner v-if="isLoading" :loading="true" />
    <div v-else-if="this.$route.params.artist && lyrics" class="lyrics">
      <p class="artist">{{ this.$route.params.artist }}</p>
      <p class="title">{{ this.$route.params.title }}</p>
      <div class="text">{{ lyrics }}</div>
    </div>
    <div
      v-else-if="this.$route.params.artist || this.$route.params.title"
      class="not-found"
    >
      Lyrics not found
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Spinner from "../components/Spinner";

export default {
  name: "Lyrics",
  components: { Spinner },
  data() {
    return {
      isLoading: true,
      artist: this.$route.params.artist,
      title: this.$route.params.title
    };
  },
  computed: {
    ...mapState("navigation", ["lyrics"])
  },
  methods: {
    ...mapActions("navigation", ["getLyrics"]),
    searchLyrics() {
      this.artist && this.title
        ? this.$router.push({
            name: "Lyrics Page",
            params: { artist: this.artist, title: this.title }
          })
        : null;
    }
  },
  async created() {
    if (this.$route.params.artist && this.$route.params.title)
      await this.getLyrics(this.$route.params);
    this.isLoading = false;
  },
  async beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    await this.getLyrics(to.params);
    this.isLoading = false;

    next();
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    color: #fff;
  }
  .input-container {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    input {
      margin: 10px;
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      font-size: 24px;
      font-family: "Alata", sans-serif;
    }
  }
  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    margin: 10px 0;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
  }
}
.lyrics {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Alata", sans-serif;
  color: #fff;

  p {
    text-transform: uppercase;
    font-weight: 600;
    &.artist {
      font-size: 50px;
      margin: 10px 0 20px 0;
    }
    &.title {
      font-size: 36px;
      margin: 0 0 30px;
    }
  }
  .text {
    margin: 0 auto;
    font-size: 24px;
    white-space: pre;
  }
}
.not-found {
  color: #fff;
  font-size: 60px;
  padding: 15% 0;
  text-align: center;
}
</style>
