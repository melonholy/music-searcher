<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./views/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;

  #app {
    font-family: "Roboto Slab", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background-color: #040404;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    &:visited {
      color: inherit;
    }
  }
}
</style>
