<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <img src="../assets/logo.png" />
        </div>
        <a :href="spotifyLogin">Sign in using Spotify</a>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import { Links } from "../utils/constants";

export default
@Component
class Modal extends Vue {
  get spotifyLogin() {
    return Links.spotifyLogin;
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;

    .modal-header {
      margin-top: 0;
      color: #42b983;

      img {
        width: 100px;
        height: 100px;
      }
    }
    a {
      font-size: 24px;
      font-weight: 600;

      &:hover {
        color: #18d860;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
  