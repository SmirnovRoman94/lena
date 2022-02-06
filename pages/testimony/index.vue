<template>
  <section>
    <div class="container">
      <div class="clients">
        <h1 class="clients_header">Uor Happy Clients</h1>
      </div>
      <div class="clients_page">
        <TestimonyList :clients="comments" />
      </div>
      <NewCommentForm />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import TestimonyList from "~/components/Testimony/TestimonyList";
import NewCommentForm from "~/components/Testimony/NewCommentForm";
export default {
  components: {
    TestimonyList,
    NewCommentForm,
  },
  async asyncData(context) {
    let [comments] = await Promise.all([
      axios.get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/comments.json`
      ),
    ]);

    let commentsArray = [],
      commentsArrayRes = [];

    Object.keys(comments.data).forEach((key) => {
      commentsArray.push(comments.data[key]);
    });

    for (let i = 0; i < commentsArray.length; i++) {
      if (commentsArray[i].publish === true) {
        commentsArrayRes.push(commentsArray[i]);
      }
    }

    return {
      comments: commentsArrayRes,
    };
  }
};
</script>

<style lang="scss">
.clients {
  margin-top: 80px;
  padding-bottom: 80px;

  .clients_header {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
}
</style>