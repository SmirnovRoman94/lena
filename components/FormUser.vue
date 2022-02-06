<template>
  <div class="message">
    <form @submit.prevent="sendMessage" class="message_form">
      <div class="form_group">
        <input class="form_control" v-model="user.name" placeholder="Name" />
      </div>
      <div class="form_group">
        <input
          type="email"
          class="form_control"
          v-model="user.email"
          placeholder="Email"
        />
      </div>
      <div class="form_group">
        <textarea
          class="form_control"
          v-model="user.message"
          placeholder="Message"
        />
      </div>
      <div class="button_group">
        <button class="send_message">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      // axios
      // .post('http:/ ввести имя хоята где будет лежать сайт ', {
      //     ...this.user
      // })
      console.log(this.user);
    },
  },
};
</script>

<style lang="scss">
.message {
  width: 100%;

  .message_form {
    padding-top: 4em;

    .form_group {
      margin-bottom: 15px;
    }
    .button_group {
      display: flex;
      justify-content: center;
    }
    .send_message {
      color: rgba(255, 255, 255, 0.9);
      background: #3ec483;
      border: none;
      padding: 7px 9px;
      margin-right: 4px;
      margin-bottom: 4px;
      font-family: "Roboto Mono", monospace;
      font-size: 16px;
      font-weight: 700;
      border-radius: 30px;
      transition: 0.5s;
    }
    .send_message:hover {
      background-color: #fff;
      color: black;
    }
  }
}
</style>