<template>
  <section class="work">
    <div class="container">
      <div class="portfolio_item">
        <img class="cart_img" :src="work.url" :alt="work.alt" />
        <div class="portfolio_item_content">
          <h3 class="cart_header">{{ work.title }}</h3>
          <p class="cart_text_item">{{ work.desc }}</p>
          <div class="followers">
            <div>
              <cardsHeart-mdi
                class="heart"
                @click="heartCountOne"
                :class="{ red: redHeart }"
              />
              <slot>{{ work.heart }}</slot>
            </div>
            <div>
              <eye-mdi
                @click="eyeCount"
                class="eye"
                :class="{ blue: blueEye }"
              />
              <slot>{{ work.eye }}</slot>
            </div>
            <div>
              <arrowCollapseDown-mdi
                @click="dowloadCount"
                class="dowload"
                :class="{ green: greenDown }"
              />
              <slot>{{ work.dowload }}</slot>
            </div>
          </div>
          <div class="portfolio_price">
            <p>
              <slot>{{ work.price }}</slot
              >₽
            </p>
            <p>
              Колличество:<slot>{{ work.count }}</slot>
            </p>
          </div>
          <div class="by_item">
            <button
              @click="ad(work)"
              v-show="canAddToCard"
              class="btn btnDefaul"
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      redHeart: false,
      blueEye: false,
      greenDown: false,
    };
  },
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
  computed: {
    canAddToCard() {
      return this.work.count > 0;
    },
  },
  methods: {
    ad() {
      this.work.count -= 1;
      let AdWork = Object.assign({}, this.work);
      this.$store.dispatch("addCart", AdWork);
    },
    heartCountOne() {
      this.work.heart++;
      this.redHeart = true;
      this.$store.dispatch("editGood", this.work);
    },
    eyeCount() {
      this.work.eye++;
      this.blueEye = true;
      this.$store.dispatch("editGood", this.work);
    },
    dowloadCount() {
      this.work.dowload++;
      this.greenDown = true;
      this.$store.dispatch("editGood", this.work);
    },
  },
};
</script>

<style lang="scss">
.portfolio_item {
  padding-top: 80px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .cart_img {
    width: 50%;
  }
  .portfolio_item_content {
    width: 50%;
    padding-left: 10%;

    .cart_header {
      width: 100%;
      font-size: 30px;
      font-weight: 600;
      text-align: center;
    }
    .cart_text_item {
      padding-top: 10%;
    }
    .followers {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      padding-top: 10%;
      .heart {
        &.red {
          color: rgb(255, 0, 0);
        }
      }
      .eye {
        &.blue {
          color: rgb(20, 219, 209);
        }
      }
      .dowload {
        &.green {
          color: rgb(63, 202, 51);
        }
      }
    }
    .by_item {
      padding-top: 10%;
      display: flex;
      justify-content: center;
    }
    .portfolio_price {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: space-around;
      padding-top: 10%;

      .price_name {
        padding-right: 1%;
      }
    }
    .btnDefaul:hover {
      background: rgb(131, 58, 180);
      background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );
    }
  }
  @media screen and (max-width: 750px) {
    .cart_img {
      width: 100%;
    }
    .portfolio_item_content {
      width: 100%;
      margin-top: 2em;
    }
  }
}
</style>
