<template>
  <section>
    <Work :work="workr" />
  </section>
</template>

<script>
import axios from "axios";
import Work from "~/components/Portfolio/Work";
export default {
  components: {
    Work,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/works/${contex.params.id}.json`
      )
      .then((res) => {
        return {
          workr: { ...res.data, id: contex.params.id },
        };
      })
      .catch((e) => contex.error(e));
  },
  computed: {
    canAddToCard() {
      return this.work.count > 0;
    },
  },
  methods: {
    ad() {
      this.$store.dispatch("addCart", this.work);
    },
  },
};
</script>

