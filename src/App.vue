


<template>
  <div>
    <exchange-navbar
      :title="brandName"
      :items="menuItems"
    />
    <router-view />
  </div>
</template>

<script>
import ExchangeNavbar from "./components/Navbar.vue";
export default {
  name: 'App',
  components: {
    ExchangeNavbar
  },
  data() {
    return {
      brandName: "Exchangario",
      menuItems: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Faq", link: "/faq" }
      ],
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';
</style>
