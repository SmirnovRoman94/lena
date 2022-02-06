<template>
  <section>
    <div class="container">
      <div class="goods_page">
        <ul class="admin_navigation">
          <nuxt-link class="admin_navigation_item" to="/admin/goods/newGoods"
            >New Good</nuxt-link
          >
        </ul>
        <WorkList :admin="true" :works="workLoaded" />
      </div>
    </div>
  </section>
</template>

<script>
import WorkList from "~/components/Portfolio/WorkList.vue";
export default {
  layout: "admin",
  middleware: ["auth"],
  components: {
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
.goods_page {
  padding-top: 80px;
}
</style>