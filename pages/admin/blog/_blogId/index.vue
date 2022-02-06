<template>
  <section>
    <h1 class="newpost">Редактирование поста</h1>
    <newPost @newPost="newPostAdmin" :postEdit="blog" />
  </section>
</template>

<script>
import axios from "axios";
import newPost from "~/components/admin/newPost.vue";
export default {
  layout: "admin",
  components: {
    newPost,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com//blog/${contex.params.blogId}.json`
      )
      .then((res) => {
        return {
          blog: { ...res.data, id: contex.params.blogId },
        };
      })
      .catch((e) => contex.error(e));
  },
  methods: {
    newPostAdmin(blog) {
      this.$store.dispatch("editPost", blog).then(() => {
        this.$router.push("/admin/blog");
      });
    },
  },
};
</script>

<style lang="scss">
.newpost {
  padding-top: 150px;
  font-size: 25px;
  text-align: center;
  font-style: italic;
}
</style>