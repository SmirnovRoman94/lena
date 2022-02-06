<template>
  <section class="auth">
    <div class="container">
      <div class="auth_page">
        <form @submit.prevent="loginIn" class="auth_form">
          <AppInput type="email" v-model="user.email">Login:</AppInput>
          <AppInput type="password" v-model="user.password">Password:</AppInput>

          <button class="btn btnPrimary">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AppInput from "~/components/UI/Controls/AppInput";
export default {
  components: {
    AppInput,
  },
  middleware: ["auth"],
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginIn() {
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          // console.log(res)
          this.$router.push("/admin");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
.auth {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.auth_page {
  max-width: 400px;
  text-align: center;
  margin: auto;
}
.auth_form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  align-items: center;
  input {
    min-width: 460px;
  }
}
</style>