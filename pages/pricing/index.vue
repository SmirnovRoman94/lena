<template>
  <section>
    <div class="container">
      <div class="pricing">
        <h1 class="pricing_header">Pricing</h1>
        <p class="pricing_text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div class="pricing_page">
        <PricingList :pricelist="priceloaded" />
      </div>
    </div>
  </section>
</template>

<script>
import PricingList from "~/components/Pricing/PricingList";
export default {
  components: {
    PricingList,
  },
  mounted() {
    this.$store.dispatch("priceInite");
  },
  computed: {
    priceloaded() {
      return this.$store.getters.getPrices;
    },
  },
};
</script>


<style lang="scss">
a {
  color: black;
}
.pricing {
  margin-top: 80px;
  padding-bottom: 80px;

  .pricing_header {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
  .pricing_text {
    padding-top: 10px;
    text-align: center;
    font-size: 20px;
  }
}
</style>