<template>
  <div>
    <Carousel />
    <div class="container">
      <div data-aos="fade-left" class="home_content">
        <img class="photo_lena" src="~/assets/img/IMG_1658.jpg" alt="lena" />
        <div class="home_con">
          <h1 class="home_title">Lorem ipsum dolor sit amet.</h1>
          <p class="home_decr">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et soluta
            tempore nisi pariatur corrupti. Dolorem vel vitae quisquam et
            recusandae quis modi doloremque inventore, sint dignissimos, quasi
            ducimus nihil non ut ipsa explicabo repellendus architecto laborum
            in suscipit! Laudantium optio voluptas, non libero perspiciatis
            possimus quam. Explicabo cumque dolor asperiores.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/UI/Carousel.vue";
export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss">
.home_content {
  margin-top: 80px;
  width: 100%;
  display: flex;
  padding-bottom: 20px;

  .photo_lena {
    width: 40%;
    padding-right: 5%;
  }

  .home_title {
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .home_content {
    flex-wrap: wrap;
  }
  .photo_lena {
    width: 100%;
    margin: auto;
  }
}
</style>