<template>
  <section>
    <Price :price="pricer" />
  </section>
</template>

<script>
import axios from "axios";
import Price from "~/components/Pricing/Price";
export default {
  components: {
    Price,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/prices/${contex.params.id}.json`
      )
      .then((res) => {
        return {
          pricer: { ...res.data, id: contex.params.id },
        };
      })
      .catch((e) => contex.error(e));
  },
};
</script>

