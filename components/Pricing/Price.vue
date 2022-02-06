<template>
  <section>
    <div class="container">
      <div class="price_item">
        <h3 class="pricing_item_header">{{ price.title }}</h3>
        <p class="prising_item_price">{{ price.price }}</p>
        <p class="pricing_item_header_down">{{ price.headerDown }}</p>
        <p class="pricing_list_item">{{ price.opportunitiesHeader }}</p>
        <p class="pricing_list_item">{{ price.opportunities }}</p>
        <div class="load_more">
          <button @click="showFrom" v-if="btn" class="pricing_more">
            Свяжитесь с нами
          </button>
        </div>
        <div class="pricing_form">
          <FormUser v-if="form"></FormUser>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormUser from "~/components/FormUser";
export default {
  components: {
    FormUser,
  },
  data() {
    return {
      form: false,
      btn: true,
    };
  },
  props: {
    price: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showFrom() {
      (this.form = true), (this.btn = false);
    },
  },
};
</script>

<style lang="scss">
.price_item {
  padding-top: 80px;
  width: 100%;
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
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: block;
  }
  .load_more {
    padding-top: 2em;
    width: 100%;
    display: flex;
    justify-content: center;

    .pricing_more {
      opacity: 1;
      font-family: "Roboto Mono", monospace;
      font-size: 16px;
      font-weight: 600;
      border-radius: 30px;
      transition: 0.5s;
      padding: 8px 20px;
      background-color: #3ec483;
    }
  }
  .pricing_form {
    width: 50%;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
