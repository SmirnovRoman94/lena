<template>
  <section>
    <no-ssr>
      <div class="container">
        <div class="comments_page">
          <CommentTable
            :thead="[
              'Name',
              'Descr',
              'Profi',
              'Url',
              'Status',
              'Change Status',
              'Delete',
            ]"
          >
            <tbody slot="tbody">
              <tr v-for="comment in comments" :key="comment.id">
                <td>
                  <span>{{ comment.names }}</span>
                </td>
                <td>
                  <span>{{ comment.descr }}</span>
                </td>
                <td>
                  <span>{{ comment.profi }}</span>
                </td>
                <td><img :src="comment.url" /></td>
                <td>
                  <span v-if="comment.publish" class="status true">
                    Publish
                  </span>
                  <span v-else class="status false"> Hiden </span>
                </td>
                <td>
                  <span @click="changeComment(comment)" class="link"
                    >Change Status</span
                  >
                </td>
                <td>
                  <span @click="deleteComment(comment)" class="link"
                    >Delete</span
                  >
                </td>
              </tr>
            </tbody>
          </CommentTable>
        </div>
      </div>
    </no-ssr>
  </section>
</template>

<script>
import axios from "axios";
import CommentTable from "~/components/CommentTable";
export default {
  layout: "admin",
  middleware: ["auth"],
  components: {
    CommentTable,
  },
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      axios
        .get(
          "https://lenaplash-16c83-default-rtdb.firebaseio.com/comments.json"
        )
        .then((res) => {
          let commentsArray = [];
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });

          this.comments = commentsArray;
        });
    },
    changeComment(comment) {
      comment.publish = !comment.publish;
      axios.put(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment(comment) {
      axios
        .delete(
          `https://lenaplash-16c83-default-rtdb.firebaseio.com/comments/${comment.id}.json`
        )
        .then((res) => {
          this.loadComments();
        });
    },
  },
};
</script>

<style lang="scss">
.comments_page {
  padding-top: 80px;
}
</style>