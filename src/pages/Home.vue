<template>
  <div id="exchangario">
    <exchange-hero />
    <exchangle-list
      :exchanges="exchanges"
    />
    <exchange-pagination
      :onNextPage="getMoreExchanges"
    />
  </div>
</template>

<script>
import ExchangleList from "../components/ExchangleList.vue";
import ExchangePagination from "../components/Pagination.vue";
import ExchangeHero from "../components/Hero.vue";

export default {
  components: {
    ExchangleList,
    ExchangePagination,
    ExchangeHero
  },
  computed: {
    exchanges() {
      return this.$store.state.exchange.items;
    }
  },
  created() {
    this.$store.dispatch("exchange/getExchanges");
  },
  methods: {
    getMoreExchanges({page}) {
      this.$store.dispatch("exchange/getMoreExchanges", {page});
    }
  }
}
</script>

<style scoped>
 .counter-container {
   padding: 200px;
   font-size: 60px;
 }
</style>
