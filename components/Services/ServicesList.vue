<template>
  <section class="services-list">
    <div class="container">
      <div class="services__wrapper">
        <ServicesPreview
          v-for="servicer in services"
          :key="servicer.id"
          :service="servicer"
          :admin="admin"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServicesPreview from "~/components/Services/ServicesPreview";
export default {
  components: {
    ServicesPreview,
  },
  props: {
    services: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss">
.services__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 2em;
}
@media screen and (max-width: 775px) {
  .services__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
  }
}
@media screen and (max-width: 490px) {
  .services__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
  }
}
</style>