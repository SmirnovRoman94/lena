<template>
  <div class="cot">
    <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
      <div v-for="image in images" :key="image.id">
        <img class="carousel_img" :src="image.url" :alt="image.alt" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      images: [
        {
          url: require("~/assets/img/carousel/pexels-anna-tarazevich-6900830.jpg"),
          alt: "img1",
          id: 1,
        },
        {
          url: require("~/assets/img/carousel/pexels-brett-sayles-6424244.jpg"),
          alt: "img1",
          id: 2,
        },
        {
          url: require("~/assets/img/carousel/pexels-cátia-matos-1045534.jpg"),
          alt: "img1",
          id: 3,
        },
        {
          url: require("~/assets/img/carousel/pexels-ezra-comeau-2387608.jpg"),
          alt: "img1",
          id: 4,
        },
        {
          url: require("~/assets/img/carousel/pexels-jansel-ferma-2315215.jpg"),
          alt: "img1",
          id: 5,
        },
        {
          url: require("~/assets/img/carousel/pexels-jansel-ferma-2315302.jpg"),
          alt: "img1",
          id: 6,
        },
        {
          url: require("~/assets/img/carousel/pexels-rodnae-productions-6784968.jpg"),
          alt: "img1",
          id: 7,
        },
        {
          url: require("~/assets/img/carousel/pexels-shukhrat-umarov-2103127.jpg"),
          alt: "img1",
          id: 8,
        },
        {
          url: require("~/assets/img/carousel/pexels-stacey-gabrielle-koenitz-rozells-3253031.jpg"),
          alt: "img1",
          id: 9,
        },
      ],
      settings: {
        autoplay: true,
      },
    };
  },
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script> 

<style lang="scss">
.cot {
  width: 100vw;
}
.carousel_img {
  height: 80vh;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>