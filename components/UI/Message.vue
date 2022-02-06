<template>
  <div class="messages" :class="mesClass">
    <p class="message_item">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: "success",
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.messages {
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: auto;
  .message_item {
    width: 100%;
  }
  &.success {
    color: rgb(5, 5, 5);
  }
  &.error {
    color: #fc5c65;
  }
}
</style>