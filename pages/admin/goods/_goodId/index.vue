<template>
  <section>
    <h1 class="newpost">Редактирование товара</h1>
    <newGood @newGood="EdidGood" :workEdit="works" />
  </section>
</template>

<script>
import axios from "axios";
import newGood from "~/components/admin/newGood.vue";
export default {
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/works/${contex.params.goodId}.json`
      )
      .then((res) => {
        return {
          works: { ...res.data, id: contex.params.goodId },
        };
      })
      .catch((e) => contex.error(e));
  },
  layout: "admin",
  components: {
    newGood,
  },
  methods: {
    EdidGood(work) {
      this.$store.dispatch("editGood", work).then(() => {
        this.$router.push("/admin/goods");
      });
    },
  },
};
</script>

<style lang="scss">
.newpost {
  padding-top: 150px;
  font-size: 25px;
  text-align: center;
  font-style: italic;
}
</style>