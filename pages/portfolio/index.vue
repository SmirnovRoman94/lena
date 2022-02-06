<template>
  <div class="container">
    <div class="portfolio_pages">
      <div class="portfolio_content">
        <h1 class="portfolio_header">Finished Work</h1>
        <p class="portfolio_text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          praesentium veritatis reprehenderit ipsam ad dignissimos voluptatem
          magni vel atque obcaecati harum laborum at expedita quas nisi tenetur
          qui, velit quisquam.
        </p>
      </div>
      <div class="portfolio">
        <WorkList :works="workLoaded" />
      </div>
    </div>
    <div class="counter_text">
      <p class="counter_text_item">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
    </div>
    <Counter />
  </div>
</template>


<script>
import Counter from "~/components/Counter.vue";
import WorkList from "~/components/Portfolio/WorkList.vue";
export default {
  components: {
    Counter,
    WorkList,
  },
  mounted() {
    this.$store.dispatch("nuxtServerInitе");
  },
  computed: {
    workLoaded() {
      return this.$store.getters.getWorks;
    },
  },
};
</script>

<style lang="scss">
.portfolio_pages {
  margin-top: 80px;
  padding-bottom: 80px;
}

.portfolio_content {
  padding-top: 60px;
  padding-bottom: 60px;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    .portfolio_content {
      width: 100%;
    }
  }
  .portfolio_header {
    font-size: 30px;
    text-align: center;
  }
  .portfolio_text {
    padding-top: 20px;
    text-align: center;
  }
}
.portfolio {
  width: 100%;
}
.counter_text {
  padding-bottom: 30px;
  .counter_text_item {
    width: 50%;
    margin: 0 auto;
    font-size: 25px;
  }
  @media (max-width: 750px) {
    .counter_text_item {
      width: 100%;
      text-align: center;
    }
  }
}
</style>