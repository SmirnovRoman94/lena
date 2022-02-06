<template>
  <div class="cart_list">
    <div class="cart_list_header">
      <p class="cart_list_header_item">Image</p>
      <p class="cart_list_header_item">Name</p>
      <p class="cart_list_header_item">Count</p>
      <p class="cart_list_header_item">Price</p>
    </div>
    <Card v-for="cartr in cartList" :key="cartr.id" :cart="cartr" />
    <div class="cart_list_footer">
      <p class="cart_list_header_item">
        Total Count<slot>{{ count }}</slot>
      </p>
      <p class="cart_list_header_item">
        Total Price<slot>{{ totalPrice }}</slot>
      </p>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card/Card";
export default {
  components: {
    Card,
  },
  props: {
    cartList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    count() {
      return this.$store.state.cardCount;
    },
    totalPrice() {
      let total = 0;

      for (let item of this.$store.state.card) {
        const tol = parseInt(item.quantity * item.price, 10);
        total += tol;
      }
      return total;
    },
  },
};
</script>

<style lang="scss">
.cart_list {
  padding-top: 80px;

  .cart_list_header {
    width: 90%;
    margin: 0 auto;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-around;
    padding: 3% 0;
  }
  .cart_list_footer {
    width: 90%;
    margin: 0 auto;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-around;
    padding: 3% 0;
  }
}
</style>