<template>
  <section>
    <h1 class="newpost">Новый пост</h1>
    <newPost @newPost="newPostAdmin" />
  </section>
</template>

<script>
import newPost from "~/components/admin/newPost.vue";
export default {
  layout: "admin",
  components: {
    newPost,
  },
  methods: {
    newPostAdmin(blog) {
      this.$store.dispatch("addPost", blog).then(() => {
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