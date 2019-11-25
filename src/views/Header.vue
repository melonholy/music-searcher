<template>
  <div class="header">
    <div id="nav">
      <router-link to="/" exact>Top Chart</router-link>
      <router-link to="/new_releases">New Releases</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/lyrics/">Lyrics</router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

export default
@Component
class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.header {
  height: 86px;
  #nav {
    display: grid;
    position: fixed;
    top: 0;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: auto;
    background: #040404;
    z-index: 1;

    a {
      position: relative;
      font-weight: bold;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      height: 30px;
      color: $text;
      padding: 15px;
      margin: 15px;

      &:hover {
        transition: 0.3s;
        font-size: 24px;
        white-space: nowrap;
      }

      &:before {
        font-size: 20px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        height: 4px;
        width: 0%;
        background-color: #fafafa;
        margin: auto;
        transition: 0.3s;
      }
    }
    .router-link-active:before {
      transition: 0.3s;
      width: 80%;
    }
  }
}
</style>
