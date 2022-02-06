<template>
  <section>
    <div class="container">
      <div data-aos="fade-up">
        <div class="post_page">
          <div class="blog_img">
            <img :src="post.url" :alt="post.date" />
          </div>
          <div class="blog_content">
            <h1 class="blog_title">{{ post.header }}</h1>
            <p class="blog_desc">{{ post.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post_page {
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;

  .blog_content {
    padding-left: 5%;
    .blog_title {
      font-size: 30px;
      font-weight: 600;
    }
    .blog_desc {
      padding-top: 2em;
    }
  }
}
@media screen and (max-width: 770px) {
  .post_page {
    flex-wrap: wrap;
  }
  .blog_content {
    margin-top: 1em;
  }
}
</style>