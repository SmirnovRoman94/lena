<template>
  <section>
    <div class="container">
      <div class="new_comment">
        <h3 class="new_comment_header">Your comment</h3>
        <!-- Message -->
        <Message v-if="message" :message="message" />
        <form @submit.prevent="newComment" class="contact-form">
          <!-- Name -->
          <AppInput v-model="commentator.names" placeholder="Your Name"
            >Name:</AppInput
          >
          <!-- Profi -->
          <AppInput v-model="commentator.profi" placeholder="Your profi"
            >Profi</AppInput
          >
          <!-- Text -->
          <AppTextArea v-model="commentator.descr" placeholder="Your comment"
            >Comment</AppTextArea
          >
          <!-- Image -->
          <AppInput v-model="commentator.url" placeholder="Your image"
            >Image</AppInput
          >

          <button class="btn btnPrimary">Submit!</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Message from "~/components/UI/Message";
export default {
  components: {
    Message,
  },
  data() {
    return {
      message: null,
      commentator: {
        names: "",
        profi: "",
        descr: "",
        url: "",
      },
    };
  },
  methods: {
    newComment() {
      this.$store
        .dispatch("addComment", {
          publish: false,
          ...this.commentator,
        })
        .then(() => {
          this.message = "Submited!";
          // Reset
          this.commentator.names = "";
          this.commentator.profi = "";
          this.commentator.descr = "";
          this.commentator.url = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
.new_comment {
  width: 33%;
  margin: 0 auto;
  .new_comment_header {
    text-align: center;
    font-size: 30px;
    color: rgb(2, 2, 2);
  }
  button {
    margin: 0 auto;
    width: 100%;
  }
}
@media screen and (max-width: 775px) {
  .new_comment {
    width: 100%;
  }
}
</style>