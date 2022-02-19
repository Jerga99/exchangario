<template>
  <div id="exchangario">
    <exchange-hero
      :onSearch="filterExchanges"
    />
    <exchangle-list
      :exchanges="exchanges"
    />
    <exchange-pagination
      :onNextPage="getMoreExchanges"
      :isFetching="isFetchingMoreData"
      :page="currentPage"
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
  data() {
    return {
      searchedExchangeTitle: ""
    }
  },
  computed: {
    exchanges() {
      console.log();
      return this.$store.getters["exchange/filterExchanges"](this.searchedExchangeTitle);
    },
    isFetchingMoreData() {
      return this.$store.state.exchange.pagination.isFetchingData
    },
    currentPage() {
      return this.$store.getters["exchange/currentPage"];
    }
  },
  created() {
    this.$store.dispatch("exchange/getExchanges");
  },
  methods: {
    getMoreExchanges({page}) {
      this.$store.dispatch("exchange/getMoreExchanges", {page});
    },
    filterExchanges(searchValue) {
      this.searchedExchangeTitle = searchValue;
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
