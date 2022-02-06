<template>
  <nuxt-link :to="getLink" class="blog_item">
    <img class="blog_item_img" :src="post.url" :alt="post.date" />
    <div class="article">
      <div class="article_desk">
        <p class="article_desk_item">{{ post.desc }}</p>
      </div>
      <div class="date">
        <p class="date_item">{{ post.date }}</p>
      </div>
    </div>
    <h3 class="header_blog_item">{{ post.header }}</h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getLink() {
      return this.admin
        ? `/admin/blog/${this.post.id}`
        : `/blog/${this.post.id}`;
    },
  },
};
</script>

<style lang="scss">
.blog_item {
  height: auto;

  .blog_item_img {
    height: 60.5%;
    background-size: cover;
    background-position: center center;
    position: relative;
    width: 100%;
    margin-bottom: 5%;
    transition: opacity 1s;
    opacity: 1;
  }
  .article {
    bottom: 62.5%;
    position: relative;
    box-sizing: content-box;
    height: 60.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .date {
    left: 0;
    width: 12.5%;
    z-index: 2;
    text-align: center;
    padding: 5px 10px;
    background: #3ec483;

    .date_item {
      font-size: 20px;
      color: #fff;
      box-sizing: border-box;
    }
  }
  .article_desk {
    opacity: 0;
    transition: opacity 0.5s;
    position: relative;
    width: 80%;
    margin: auto;
  }
  .header_blog_item {
    bottom: 62.5%;
    position: relative;
    font-size: 20px;
    font-weight: 600;
  }
}
.blog_item:hover {
  .blog_item_img {
    opacity: 0;
  }
  .article_desk {
    opacity: 1;
  }
}
@media screen and (max-width: 775px) {
  .blog_item {
    height: 400px;
  }
}
@media screen and (max-width: 490px) {
  .blog_item {
    height: 500px;
  }
}
</style>