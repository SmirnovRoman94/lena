<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/system/Footer.vue";
import Header from "~/components/system/Header";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>