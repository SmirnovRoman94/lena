<template>
  <section class="card_page">
    <div class="container_card">
      <div v-if="$store.state.card.length > 0">
        <CardList :cartList="GoodsInCard" />
      </div>
      <div v-else class="no_shopping">
        <p class="no_shopping header">In Card no shoping</p>
        <nuxt-link class="no_shopping link" to="/portfolio"
          >Вернуться за покупуками</nuxt-link
        >
      </div>
      <div v-if="$store.state.card.length > 0" class="clients_data">
        <Message v-if="message" :message="message" />
        <form @submit.prevent="clientData" class="clients_data_item">
          <AppInput v-model="user.name">Name:</AppInput>
          <AppInput type="email" v-model="user.email">Email:</AppInput>
          <button class="btn btnPrimary">Add</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import CardList from "~/components/Card/CardList";
import Message from "~/components/UI/Message";
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
      },
    };
  },
  components: {
    CardList,
    Message,
  },
  methods: {
    clientData() {
      this.$store.dispatch("addClients", this.user);
      reset.then(() => {
        this.message = "Товар отправлен в обравотку! Спасибо!";
        setTimeout(() => {
          this.$store.state.cardCount = 0;
          this.$router.go();
        }, 5000);
      });
    },
  },
  computed: {
    GoodsInCard() {
      console.log(this.$store.getters.getCard);
      return this.$store.getters.getCard;
    },
  },
};
</script>

<style lang="scss">
.container_card {
  width: 100%;
  flex: 0 0 auto;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}
.card_page {
  padding-top: 80px;
}
.no_shopping {
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .header {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
  .link {
    margin: auto;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
}
.clients_data {
  width: 40%;
  margin: 2em auto;

  .clients_data_item {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      width: 30%;
      margin: auto;
    }
  }
}
@media screen and (max-width: 980px) {
  .container_card {
    max-width: 768px;
  }
  .card_page {
    height: 70vh;
  }
  .clients_data {
    width: 90%;
  }
}
@media screen and (max-width: 768px) {
  .container_card {
    max-width: 600px;
  }
  .card_page {
    height: auto;
  }
}
</style>