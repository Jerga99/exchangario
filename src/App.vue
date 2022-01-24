<template>
  <div id="exchangario">
    <exchange-navbar />
    <exchange-hero />

    <!-- POST LIST START -->
    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        <div class="columns is-multiline">
          <div class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
            <div class="item post-card bottom-border">
              <a class="item-link" href="#">
                <figure class="image is-2by1 item-figure background-img" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)' }" alt="">
                </figure>
                <div class="item-featured">
                  Icon
                </div>
              </a>
              <div class="item-tags">
                <a class="button is-rounded" href="#" title="Some Title">#Art</a>
              </div>
              <h2 class="title item-title is-size-4 has-text-weight-extra-bold"><a class="item-link" href="#">Some Title</a></h2>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">Filip Jerga</div>
                </div>
                <div class="level-right">
                  27th December 2019
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
            <div class="item post-card has-border">
              <a class="item-link" href="#">
                <div class="item-featured">
                  Icon
                </div>
              </a>
              <div class="item-tags">
                <a class="button is-rounded" href="#" title="Some Title">#Art</a>
              </div>
              <h2 class="title item-title is-size-4 has-text-weight-extra-bold"><a class="item-link" href="#">Some Title</a></h2>
              <div class="item-description">
                Aaaaaaa
              </div>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">Filip Jerga</div>
                </div>
                <div class="level-right">
                  27th December 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- POST LIST END -->

    <!-- PAGINATION START -->
    <nav class="pagination is-rounded  is-centered" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li>
          <button
            type="button"
            class="pagination-previous has-text-weight-bold">Previous</button>
        </li>
        <li>
          <button
            type="button"
            class="pagination-link button has-text-weight-bold is-primary">Page 1</button>
        </li>
        <li>
          <button
            type="button"
            class="pagination-next has-text-weight-bold">Next</button>
        </li>
      </ul>
    </nav>
    <!-- PAGINATION END -->
  </div>
</template>

<script>
import ExchangeNavbar from "./components/Navbar.vue";
import ExchangeHero from "./components/Hero.vue";
export default {
  name: 'App',
  components: {
    ExchangeNavbar,
    ExchangeHero
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';

  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
  }
</style>
