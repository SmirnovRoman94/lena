<template>
  <div class="container">
    <div class="service_page">
      <ul class="admin_navigation">
        <nuxt-link
          class="admin_navigation_item"
          to="/admin/services/newServices"
          >New services</nuxt-link
        >
      </ul>
      <ServicesList :admin="true" :services="serviceLoaded" />
    </div>
  </div>
</template>


<script>
import ServicesList from "~/components/Services/ServicesList";
export default {
  layout: "admin",
  middleware: ["auth"],
  components: {
    ServicesList,
  },
  mounted() {
    this.$store.dispatch("serviceInite");
  },
  computed: {
    serviceLoaded() {
      return this.$store.getters.getServices;
    },
  },
};
</script>


<style lang="scss">
.service_page {
  padding-top: 80px;
}
</style>