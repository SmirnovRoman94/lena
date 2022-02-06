<template>
  <section>
    <div class="container">
      <div class="blog_page">
        <ul class="admin_navigation">
          <nuxt-link class="admin_navigation_item" to="/admin/blog/newPostBlog"
            >New post In blog</nuxt-link
          >
        </ul>
      </div>
      <PostList :admin="true" :posts="blogLoaded" />
    </div>
  </section>
</template>

<script>
import PostList from "~/components/Blog/PostList";
export default {
  layout: "admin",
  middleware: ["auth"],
  components: {
    PostList,
  },
  mounted() {
    this.$store.dispatch("blogInite");
  },
  computed: {
    blogLoaded() {
      return this.$store.getters.getBlog;
    },
  },
};
</script>

<style lang="scss">
.blog_page {
  padding-top: 80px;
}
</style>