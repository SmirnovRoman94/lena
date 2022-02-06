<template>
  <section>
    <div class="container">
      <div class="parice_page">
        <ul class="admin_navigation">
          <nuxt-link class="admin_navigation_item" to="/admin/prices/newPrice"
            >New Price</nuxt-link
          >
        </ul>
      </div>
      <PricingList :admin="true" :pricelist="priceloaded" />
    </div>
  </section>
</template>

<script>
import PricingList from "~/components/Pricing/PricingList";
export default {
  layout: "admin",
  middleware: ["auth"],
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
.parice_page {
  padding-top: 80px;
}
</style>