<template>
  <section>
    <Post :post="blog" />
  </section>
</template>

<script>
import axios from "axios";
import Post from "~/components/Blog/Post";
export default {
  components: {
    Post,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com//blog/${contex.params.id}.json`
      )
      .then((res) => {
        return {
          blog: { ...res.data, id: contex.params.id },
        };
      })
      .catch((e) => contex.error(e));
  },
};
</script>