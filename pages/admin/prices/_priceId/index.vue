<template>
  <section>
    <h1 class="newpost">Редактирование price</h1>
    <newPrice @newPrice="newPriceAdmin" :priceEdit="price" />
  </section>
</template>

<script>
import axios from "axios";
import newPrice from "~/components/admin/newPrice";
export default {
  layout: "admin",
  components: {
    newPrice,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com//prices/${contex.params.priceId}.json`
      )
      .then((res) => {
        return {
          price: { ...res.data, id: contex.params.priceId },
        };
      })
      .catch((e) => contex.error(e));
  },

  methods: {
    newPriceAdmin(price) {
      this.$store.dispatch("editPrice", price).then(() => {
        this.$router.push("/admin/prices");
      });
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
}
</style>