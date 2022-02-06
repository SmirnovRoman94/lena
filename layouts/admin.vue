<template>
  <div>
    <Header></Header>
    <Nuxt />
  </div>
</template>

<script>
import Header from "~/components/system/Header";
export default {
  components: {
    Header,
  },
};
</script>