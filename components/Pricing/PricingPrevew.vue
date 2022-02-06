<template>
  <section>
    <nuxt-link :to="getLink">
      <div class="pricing_item">
        <h3 class="pricing_item_header">{{ price.title }}</h3>
        <p class="prising_item_price">{{ price.price }}</p>
        <p class="pricing_item_header_down">{{ price.headerDown }}</p>
        <p class="pricing_list_item">{{ price.opportunitiesHeader }}</p>
        <div class="load_more">
          <button class="pricing_more">Read More</button>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    price: {
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
        ? `/admin/prices/${this.price.id}`
        : `/pricing/${this.price.id}`;
    },
  },
};
</script>

<style lang="scss">
.pricing_item {
  width: 95%;
  margin: 1.5em 1em;
  padding: 3em 2em 2em 2em;
  cursor: default;
  background: #fff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  transition: 0.3s;

  .pricing_item_header {
    font-size: 24px;
    text-align: center;
    margin: 0 0 2em 0;
  }
  .prising_item_price {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 95px;
    width: 100px;
    height: 100px;
    margin: 1.15em auto 1em;
    background: #3ec483;
    color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }
  .prising_item_price::after {
    padding-left: 4px;
    content: "₽";
  }
  .pricing_item_header_down {
    margin-bottom: 1.5em;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
  }
  .pricing_list_item {
    margin: 0;
    padding: 1em 1em 2em 1em;
    list-style: none;
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: block;
  }
  .load_more {
    margin-top: 2em;
    width: 100%;
    display: flex;
    justify-content: center;

    .pricing_more {
      opacity: 0;
      font-family: "Roboto Mono", monospace;
      font-size: 16px;
      font-weight: 600;
      border-radius: 30px;
      transition: 0.5s;
      padding: 8px 20px;
      background-color: #fff;
    }
  }
}
.pricing_item:hover {
  background-color: rgba(164, 240, 177, 0.685);
  .pricing_list_item {
    font-weight: 600;
  }
  .pricing_more {
    opacity: 1;
    background: #3ec483;
    transform: translate3d(0, -15px, 0);
    color: #fff;
    font-weight: 600;
  }
}
</style>