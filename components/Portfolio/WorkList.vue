<template>
  <section class="work-list">
    <div class="container">
      <div class="work__wrapper">
        <WorkPreview
          v-for="workr in works"
          :key="workr.id"
          :admin="admin"
          :work="workr"
        />
      </div>
    </div>
  </section>
</template>


<script>
import WorkPreview from "~/components/Portfolio/WorkPreview.vue";
export default {
  components: { WorkPreview },
  props: {
    works: {
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
.work__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 2em;
}
@media screen and (max-width: 750px) {
  .work__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
  }
}
@media screen and (max-width: 490px) {
  .work__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
  }
}
</style>
