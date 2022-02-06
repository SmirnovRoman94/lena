<template>
  <div class="price-list">
    <div class="container">
      <div class="pricelist__wrapper">
        <PricingPrevew
          v-for="prices in pricelist"
          :key="prices.id"
          :admin="admin"
          :price="prices"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PricingPrevew from "~/components/Pricing/PricingPrevew";
export default {
  components: {
    PricingPrevew,
  },
  props: {
    pricelist: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.price-list {
  width: 100%;
}
.pricelist__wrapper {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 480px) {
  .pricelist__wrapper {
    flex-wrap: wrap;
  }
}
</style>