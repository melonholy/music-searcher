<template>
  <div>
    <transition appear appear-active-class="fade-enter-active">
      <div>
        <PulseLoader
          v-if="this.$props.showSpinner"
          class="spinner"
        ></PulseLoader>
        <article v-else class="container">
          <slot></slot>
        </article>
      </div>
    </transition>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "CardContainer",
  props: {
    showSpinner: {
      type: Boolean
    }
  },
  components: { PulseLoader }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: appearing 2s;
}

@keyframes appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
