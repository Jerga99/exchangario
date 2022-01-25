<template>
  <div id="exchangario">
    <exchange-navbar
      :title="brandName"
      :items="menuItems"
    />
    <exchange-hero />
    <exchangle-list />
    <exchange-pagination />
  </div>
</template>

<script>
import ExchangeNavbar from "./components/Navbar.vue";
import ExchangeHero from "./components/Hero.vue";
import ExchangleList from "./components/ExchangleList.vue";
import ExchangePagination from "./components/Pagination.vue";
export default {
  name: 'App',
  components: {
    ExchangeNavbar,
    ExchangeHero,
    ExchangleList,
    ExchangePagination
  },
  data() {
    return {
      brandName: "Exchangario",
      menuItems: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Faq", link: "/faq" },
        { text: "Login", link: "/login" },
        { text: "Register", link: "/register" },
      ]
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';
</style>
