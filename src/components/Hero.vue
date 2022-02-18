<template>
  <div class="hero-section">
    <section class="hero background-img is-large" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)' }">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-size-1 has-text-white">
            Let's Exchange!
          </h1>
          <h2 class="subtitle has-text-light">
            Products and Services we can exchange together
          </h2>
        </div>
      </div>
    </section>
    <div class="search-lookup-wrap">
      <div class="search-lookup centered">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span>Search For</span>
            </div>
            <div class="level-item">
              <input
                @input="handleSearch"
                type="text"
                class="input"
                placeholder="Driller">
            </div>
            <div class="level-item">
              <span v-if="searchedValue">Searching "{{searchedValue}}"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      searchedValue: ""
    }
  },
  methods: {
    handleSearch(e) {
      const { value } = e.target;
      this.searchedValue = value;
      this.onSearch(value);
    }
  }
}
</script>


<style scoped lang="scss">
  .hero-section {
    position: relative;
  }

  .search-lookup {
    width: 960px;
    margin: 0 auto;
    background-color: #262d32;
    padding: 20px;
    color: white;
    border-radius: 10px;
  }
  .search-lookup-wrap {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: auto;
    bottom: -42px;
  }

  @media only screen and (max-width: 769px) {
    .search-lookup-wrap {
      position: inherit;
      bottom: unset;
    }
    .search-lookup {
      width: 100%;
      border-radius: 0px;
    }
  }

  .search-card-find {
    width: 100%;
    height: 180px;
    position: relative;
    display: block;
    border-radius: 3px;
    text-decoration: none;
    box-shadow: 0 0 1px rgba(0,0,0,.05);
    background-clip: content-box;
    background-size: cover;
    background-position: 50% 20%;
    border: 1px solid rgba(0,0,0,.12);
    -webkit-tap-highlight-color: transparent;
    &-interest {
      position: absolute;
      bottom: 12px;
      right: 12px;
      > p {
        font-weight: bold;
      }
    }
    .title {
      color: white;
    }
    .subtitle {
      color: white;
    }
    &-content {
      &-date {
        margin: 10px;
        width: 70px;
        text-align: center;
        border-radius: 50%;
        .day {
          display: block;
          font-size: 21px;
          color: white;
          font-weight: bold;
        }
        .month {
          display: block;
          color: #ff5050;
          font-weight: bold;
          font-size: 23px;
          margin-bottom: -5px;
        }
      }
      &-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;
        width: 100%;
      }
    }
  }
</style>
