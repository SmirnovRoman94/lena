<template>
  <section class="testimony-list">
    <div class="container">
      <div class="testimony__wrapper">
        <TestimonyPrewiev
          v-for="clientr in clients"
          :key="clientr.id"
          :client="clientr"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TestimonyPrewiev from "~/components/Testimony/TestimonyPrewiev";
export default {
  components: {
    TestimonyPrewiev,
  },
  props: {
    clients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.testimony__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 2em;
}
@media screen and (max-width: 775px) {
  .testimony__wrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
  }
}
@media screen and (max-width: 490px) {
  .testimony__wrapper {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
  }
}
</style>