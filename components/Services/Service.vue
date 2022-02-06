<template>
  <section>
    <div class="container">
      <div data-aos="fade-up">
        <div class="service_item">
          <div class="service_page img">
            <img class="services_item_img" :src="servicer.img" />
          </div>
          <div class="service_body">
            <h3 class="services_item_header">{{ servicer.title }}</h3>
            <p class="services_item_text">{{ servicer.descr }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    servicer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.service_item {
  padding: 40px;
  margin: 3%;
  display: flex;
  .img {
    width: 30%;
  }
  .services_item_img {
    width: 50%;
    margin: 0 auto;
  }
  .services_item_header {
    font-size: 24px;
    font-weight: 400;
    padding-top: 20px;
    border-bottom: solid 3px green;
    text-align: center;
  }
  .services_item_text {
    padding-top: 30px;
  }
}
@media screen and (max-width: 775px) {
  .service_item {
    flex-wrap: wrap;
  }
  .img {
    width: 100%;
    margin: auto;
  }
}
@media screen and (max-width: 490px) {
  .service_item {
    flex-wrap: wrap;
  }
  .img {
    width: 100%;
    margin: auto;
  }
}
</style>