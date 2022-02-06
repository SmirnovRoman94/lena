<template>
  <section class="posts-list">
    <div class="container">
      <div class="posts__wrapper">
        <PostPreview
          v-for="postr in posts"
          :key="postr.id"
          :admin="admin"
          :post="postr"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PostPreview from "~/components/Blog/PostPreview";
export default {
  components: {
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.posts__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 2em;
}
@media screen and (max-width: 775px) {
  .posts__wrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 1em;
  }
}
@media screen and (max-width: 490px) {
  .posts__wrapper {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 1em;
  }
}
</style>