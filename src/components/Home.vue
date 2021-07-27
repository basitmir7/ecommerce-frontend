<template>
  <div class="home"></div>
  <carousel />
  <exploreabout />
</template>

<script>
import carousel from "./homefiles/carousel.vue";
import exploreabout from "./homefiles/exploreabout.vue";
export default {
  name: "Home",
  components: { carousel, exploreabout },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  background: rgb(254, 255, 248);
}
</style>
