<template>
  <nuxt-link :to="getLink" class="portfolio_cart">
    <img class="cart_img" :src="work.url" :alt="work.alt" />
    <div class="cart_text">
      <p class="cart_text_item">{{ work.descr }}</p>
    </div>
    <h3 class="cart_header">{{ work.title }}</h3>
    <hr />
    <div class="followers">
      <div>
        <img
          class="heart"
          src="https://img.icons8.com/ios/50/000000/like.png"
          alt="heart"
        />
        <slot>{{ work.heart }}</slot>
      </div>
      <div>
        <img
          class="eye"
          src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png"
          alt="eye"
        />
        <slot>{{ work.eye }}</slot>
      </div>
      <div>
        <img
          class="dowload"
          src="https://img.icons8.com/fluency-systems-filled/48/000000/download.png"
          alt="dowload"
        />
        <slot>{{ work.dowload }}</slot>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    work: {
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
        ? `/admin/goods/${this.work.id}`
        : `/portfolio/${this.work.id}`;
    },
  },
};
</script>

<style lang="scss">
.portfolio_cart {
  width: 100%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  animation-name: ar 2s;

  .cart_text {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    opacity: 0;
    color: black;
    transition: opacity 1s;

    .cart_text_item {
      text-align: center;
      padding-top: 50%;
    }
  }
  .cart_img {
    opacity: 1;
    transition: opacity 0.8s;
  }
  .cart_header {
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
  }
  .followers {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    padding-bottom: 10px;
    .heart {
      width: 20px;
    }
    .eye {
      width: 20px;
    }
    .dowload {
      width: 20px;
    }
  }
}
.portfolio_cart:hover {
  .cart_img {
    opacity: 0.7;
  }
  .cart_text {
    opacity: 1;
  }
}
</style>
