<template>
  <section>
    <div class="container">
      <div class="blog">
        <h1 class="blog_header">Read Our Blog</h1>
        <p class="blog_text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove.
        </p>
      </div>
      <div class="blog_page">
        <PostList :posts="blogLoaded" />
      </div>
    </div>
  </section>
</template>


<script>
import PostList from "~/components/Blog/PostList";
export default {
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
.blog {
  margin-top: 80px;
  padding-bottom: 80px;

  .blog_header {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
  .blog_text {
    padding-top: 20px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
