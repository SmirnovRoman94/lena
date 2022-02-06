<template>
  <section>
    <h1 class="newservices">Новый services</h1>
    <newServices @newService="newServicesAdmin" />
  </section>
</template>

<script>
import newServices from "~/components/admin/newServices";
export default {
  layout: "admin",
  components: {
    newServices,
  },
  methods: {
    newServicesAdmin(service) {
      this.$store.dispatch("addService", service).then(() => {
        this.$router.push("/admin/services");
      });
    },
  },
};
</script>

<style lang="scss">
.newservices {
  padding-top: 150px;
  font-size: 25px;
  text-align: center;
  font-style: italic;
}
</style>