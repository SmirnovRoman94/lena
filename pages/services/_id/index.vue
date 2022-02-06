<template>
  <section>
    <Service :servicer="service" />
  </section>
</template>


<script>
import axios from "axios";
import Service from "~/components/Services/Service";
export default {
  components: {
    Service,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/services/${contex.params.id}.json`
      )
      .then((res) => {
        return {
          service: { ...res.data, id: contex.params.id },
        };
      })
      .catch((e) => contex.error(e));
  },
};
</script>
