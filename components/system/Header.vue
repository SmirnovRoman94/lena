<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo"><nuxt-link to="/">Solid</nuxt-link></div>
          <input type="checkbox" name="menu" id="btn-menu" />
          <label class="btn-menu" for="btn-menu">Меню</label>
          <ul class="navbar-list" :class="{ active: menuDown }">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url"
                >{{ link.title }}<span></span
              ></nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuDown: false,
      links: [
        { title: "Home", url: "/" },
        { title: "Services", url: "/services" },
        { title: "Portfolio", url: "/portfolio" },
        { title: "Testimony", url: "/testimony" },
        { title: "Pricing", url: "/pricing" },
        { title: "Blog", url: "/blog" },
        { title: "Card", url: "/card" },
      ],
    };
  },
  methods: {
    menuDowned() {
      this.menuDown = true;
    },
  },
};
</script>

<style lang="scss">
.logo a {
  font-family: "Roboto Mono";
  font-weight: 400;
  color: #333333;
}
.navbar-link {
  font-size: 16px;
  font-family: "Roboto Mono";
  font-weight: 800;
  &.nuxt-link-exact-active {
    color: #3ec483;
    border-bottom: #3ec483 solid 1px;
    transition: all 0.5s ease-in-out 0.5s;
  }
}
</style>