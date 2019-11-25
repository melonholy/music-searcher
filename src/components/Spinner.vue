<template>
  <PulseLoader class="spinner" />
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "Spinner",
  components: {
    PulseLoader
  }
};
</script>

<style lang="scss" scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
}
</style>
