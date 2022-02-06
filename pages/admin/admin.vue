<template>
  <section>
    <div class="container">
      <div class="adminPage">
        <h1 class="adminPage_header">Admin Page</h1>
        <ul class="admin_navigation">
          <nuxt-link class="admin_navigation_item" to="/admin">Admin</nuxt-link>
          <nuxt-link class="admin_navigation_item" to="/admin/goods"
            >Товары</nuxt-link
          >
          <nuxt-link class="admin_navigation_item" to="/admin/blog"
            >Посты</nuxt-link
          >
          <nuxt-link class="admin_navigation_item" to="/admin/comments"
            >Comments</nuxt-link
          >
          <nuxt-link class="admin_navigation_item" to="/admin/services"
            >Services</nuxt-link
          >
          <nuxt-link class="admin_navigation_item" to="/admin/prices"
            >Prices</nuxt-link
          >
          <a @click="logoutUser" class="admin_navigation_item">Logout</a>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  layout: "admin",
  middleware: ["auth-init", "auth"],
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/admin/auth");
      });
    },
  },
};
</script>

<style lang="scss">
.adminPage {
  padding-top: 80px;
}
.adminPage_header {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.admin_navigation {
  margin-top: 30px;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .admin_navigation_item {
    color: #fff;
    font-size: 20px;

    &:hover {
      border-bottom: solid 1px #fff;
    }
  }
}
@media screen and (max-width: 775px) {
  .admin_navigation {
    flex-wrap: wrap;
  }
  .admin_navigation_item {
    padding-left: 1em;
  }
}
@media screen and (max-width: 480px) {
  .admin_navigation {
    height: fit-content;
  }
  .admin_navigation_item {
    padding-left: 1em;
  }
}
</style>