<template>
  <div class="slide-main">
    <vueper-slides fade :touchable="false" autoplay class="slide">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "carousel",
  components: { VueperSlide, VueperSlides },
  data() {
    return {
      slides: [
        {
          title: "",
          content: "Horticulture",
          image: require("../../assets/s7.jpg"),
        },
        {
          title: "Fresh",
          content: "",
          image: require("../../assets/s5.jpg"),
        },
        {
          title: "",
          content: "",
          image: require("../../assets/s3.jpg"),
        },
        {
          title: "Premium quality",
          content: "",
          image: require("../../assets/1.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
.slide-main {
  font-size: 24px;
  font-family: "Oswald";
  color: aliceblue;
  margin-top: 25px;
  border-style: none;

  -webkit-box-shadow: 0 8px 6px -6px rgb(155, 152, 152);
  -moz-box-shadow: 0 8px 6px -6px rgb(155, 152, 152);
  box-shadow: 0 8px 6px -6px rgb(155, 152, 152);
  letter-spacing: 3px;
  font-weight: bold;
}
.slide-main:hover {
  opacity: 0.9;
  transform: scale(1.1);
  transition: ease-in-out 200ms;
}
</style>
