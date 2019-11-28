<template>
  <div class="container">
    <section class="artist-info">
      <article>
        <p>{{ album.name }}</p>
        <p v-if="album.artists">{{ album.artists[0].name }}</p>
      </article>
      <a v-if="!album.tracks.items[0].track">View More by this Artist</a>
    </section>
    <div class="common-and-track-info">
      <section class="common-info">
        <section class="title">
          <img :src="album.images[0].url" alt class="album-logo" />
          <a
            :href="album.external_urls.spotify"
            target="about_blank"
            class="spotify-link"
          >
            <img src="../../assets/logo.png" alt class="spotify-logo" />
          </a>
          <div v-if="!album.tracks.items[0].track" class="release-date">
            <p>Released:</p>
            <p>{{ releaseDate(album.release_date) }}</p>
          </div>
          <p v-if="!album.tracks.items[0].track" class="copyright">
            {{ album.copyrights[0].text }}
          </p>
        </section>
      </section>
      <section class="track-list">
        <div class="tracks-container-title">Track list</div>
        <section
          class="tracks"
          :style="{
            gridTemplateRows:
              'repeat(' + (album.tracks.total + 1) + ',minmax(50px,auto))'
          }"
        >
          <div></div>
          <span class="grid-header">Name</span>
          <span class="grid-header">Artist</span>
          <span class="grid-header">Time</span>
          <div></div>
          <div></div>
          <template v-for="(item, index) in album.tracks.items">
            <span v-if="item.track" v-bind:key="item.track.name">{{
              index + 1
            }}</span>
            <span v-else v-bind:key="item.name">{{ item.track_number }}</span>
            <span v-if="item.track" v-bind:key="item.track.name + 1">{{
              item.track.name
            }}</span>
            <span v-else v-bind:key="item.name + 1">{{ item.name }}</span>
            <span v-if="item.track" v-bind:key="item.track.name + 2">{{
              item.track.artists[0].name
            }}</span>
            <span v-else v-bind:key="item.name + 2">{{
              item.artists[0].name
            }}</span>
            <span v-if="item.track" v-bind:key="item.track.name + 3">{{
              duration(item.track.duration_ms)
            }}</span>
            <span v-else v-bind:key="item.name + 3">{{
              duration(item.duration_ms)
            }}</span>
            <a
              v-if="item.track"
              v-bind:key="item.track.name + 4"
              :href="item.track.external_urls.spotify"
              target="about_blank"
            >
              View in Spotify
            </a>
            <a
              v-else
              v-bind:key="item.name + 4"
              :href="item.external_urls.spotify"
              target="about_blank"
            >
              View in Spotify
            </a>
            <router-link
              v-if="item.track"
              v-bind:key="item.track.name + 5"
              :to="{
                name: 'Lyrics Page',
                params: {
                  artist: item.track.artists[0].name,
                  title: item.track.name
                }
              }"
            >
              Lyrics
            </router-link>
            <router-link
              v-else
              v-bind:key="item.name + 5"
              :to="{
                name: 'Lyrics Page',
                params: {
                  artist: item.artists[0].name,
                  title: item.name
                }
              }"
            >
              Lyrics
            </router-link>
          </template>
        </section>
      </section>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AlbumInfo",
  props: {
    singleAlbum: Object
  },
  computed: {
    album() {
      return this.$props.singleAlbum;
    }
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
  },
  async created() {
    await this.$store.dispatch(
      "categories/getPlaylistByCategory",
      this.$route.params.name
    );
  },
  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch(
      "categories/getPlaylistByCategory",
      to.params.name
    );
    next();
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: auto;
  min-height: 85vh;
  background-color: #141415;

  .artist-info {
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fafafa;
    }

    article {
      display: flex;
      width: 50%;
      justify-content: space-between;

      p {
        display: flex;
        width: 50%;
        justify-content: space-between;
        font-size: 28px;
        font-weight: 800;
        color: #fafafa;

        &:last-of-type {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-weight: 400;
          color: #b3b3b3;
        }
      }
    }
  }
  .common-and-track-info {
    display: flex;
    justify-content: space-between;

    .common-info {
      display: flex;
      min-width: 450px;
      width: 40%;
      margin: 10px;

      .title {
        display: flex;
        flex-direction: column;

        .spotify-link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          background-color: #1db954;
          border-radius: 25px;

          .spotify-logo {
            margin: 0;
            height: 40px;
            width: 130px;
          }
        }

        .album-logo {
          margin: 10px 0;
          width: 450px;
          height: 450px;
        }
        span {
          text-align: center;
          font-size: 30px;
          font-weight: 600;
        }

        .release-date {
          display: flex;
          margin: 20px 0 0 0;
          p {
            white-space: nowrap;
            color: #b3b3b3;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
          }
        }
        .copyright {
          color: #b3b3b3;
        }
      }
    }
    .track-list {
      width: 60%;
      margin-top: 10px;

      .tracks-container-title {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 20px;
        color: #fafafa;
      }

      .tracks {
        .grid-header {
          padding-bottom: 20px;
          font-size: 20px;
          font-weight: 600;
          color: #fafafa;
        }

        display: grid;
        grid-template-columns: 0.5fr 2.5fr 1.5fr 1fr 2fr 1fr;

        a {
          color: #fafafa;
        }
        span {
          color: #b3b3b3;
        }
      }
    }
  }
}
</style>
