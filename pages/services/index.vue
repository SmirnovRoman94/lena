<template>
  <div class="container">
    <div class="services">
      <ServicesList :services="serviceLoaded" />
    </div>
  </div>
</template>


<script>
import ServicesList from "~/components/Services/ServicesList";
export default {
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
a {
  color: black;
}
.services {
  width: 100%;
  margin: 120px auto;
  display: flex;
  flex-direction: inherit;
  min-height: 70vh;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}
.services_content {
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>