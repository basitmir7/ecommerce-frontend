<template>
  <div class="home"></div>
  <homebanner />
  <carousel />
  <exploreabout />
</template>

<script>
import carousel from "./homefiles/carousel.vue";
import exploreabout from "./homefiles/exploreabout.vue";
import Homebanner from "./homefiles/homebanner.vue";

export default {
  name: "Home",
  components: { carousel, exploreabout, Homebanner },
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
