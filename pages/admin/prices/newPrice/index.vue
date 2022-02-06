<template>
  <section>
    <h1 class="newpost">Новый price</h1>
    <newPrice @newPrice="newPriseAdmin" />
  </section>
</template>

<script>
import newPrice from "~/components/admin/newPrice";
export default {
  layout: "admin",
  components: {
    newPrice,
  },
  methods: {
    newPriseAdmin(price) {
      this.$store.dispatch("addPrice", price).then(() => {
        this.$router.push("/admin/prices");
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