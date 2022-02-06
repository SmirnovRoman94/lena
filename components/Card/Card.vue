<template>
  <section>
    <div class="cart">
      <div class="cart_item">
        <img class="cart_img" :src="cart.url" :alt="cart.alt" />
        <p class="cart_title">{{ cart.title }}</p>
        <p class="cart_count">{{ cart.quantity }}</p>
        <p class="cart_price">{{ totalItemPrice }}</p>
        <span
          class="removeBtn"
          title="Удалить из корзины"
          @click.prevent="deleteFromCard(cart)"
          >X</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  computed: {
    totalItemPrice() {
      let totalitem = this.cart.price * this.cart.quantity;
      return totalitem;
    },
  },
  methods: {
    deleteFromCard(cart) {
      function Deleter(cart) {
        this.alt = cart.alt;
        this.count = parseInt(cart.count + cart.quantity);
        this.desc = cart.desc;
        this.dowload = cart.dowload;
        this.eye = cart.eye;
        this.heart = cart.heart;
        this.id = cart.id;
        this.price = cart.price;
        this.quantity = 1;
        this.title = cart.title;
        this.totalPrice = cart.totalPrice;
        this.url = cart.url;
      }

      this.$store.dispatch("delCard", this.cart);
      let deleteCart = new Deleter(this.cart);
      this.$store.dispatch("removeCart", deleteCart);
    },
  },
};
</script>

<style lang="scss">
.cart {
  .cart_item {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

    .cart_img {
      width: 20%;
    }
    .cart_title {
      font-size: 20px;
      font-weight: 600;
    }
    .cart_count {
      font-size: 20px;
    }
    .cart_price {
      color: brown;
      font-size: 25px;
    }
    .removeBtn {
      margin-right: 1rem;
      color: red;
    }
  }
}
</style>