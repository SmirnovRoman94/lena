<template>
  <section>
    <nuxt-link :to="getLink">
      <div :data-aos="service.aos" class="services_item">
        <img class="services_item_img" :src="service.img" />
        <h3 class="services_item_header">{{ service.title }}</h3>
        <p class="services_item_text">{{ service.descr }}</p>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getLink() {
      return this.admin
        ? `/admin/services/${this.service.id}`
        : `/services/${this.service.id}`;
    },
  },
};
</script>

<style lang="scss">
.services_item {
  padding: 20px;
  margin: 3%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  .services_item_img {
    width: auto;
    margin: 0 auto;
    height: auto;
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
.services_item:hover {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(21, 213, 203, 1) 45%,
    rgba(0, 212, 255, 1) 100%
  );
  .services_item_img {
    transform: rotate(45deg);
    transition: all 0.5s ease-in-out 0s;
  }
  .services_item_text {
    color: white;
  }
  .services_item_header {
    color: white;
  }
}
</style>