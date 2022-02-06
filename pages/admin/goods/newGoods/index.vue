<template>
  <section>
    <h1 class="newpost">Новый Товар</h1>
    <newGood @newGood="newGoodAdmin" />
  </section>
</template>

<script>
import newGood from "~/components/admin/newGood.vue";
export default {
  layout: "admin",
  components: {
    newGood,
  },
  methods: {
    newGoodAdmin(work) {
      this.$store.dispatch("addGood", work).then(() => {
        this.$router.push("/admin");
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