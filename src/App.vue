<template>
  <div>
    <!-- NAVBAR -->
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-white is-size-2 has-text-weight-bold" href="#">
              Your App
            </a>
            <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbar-menu" class="navbar-menu">
            <div class="navbar-end">
              <!-- Loop through the navigation items -->
              <a class="navbar-item nav-home" href="#">Home</a>
              <a class="navbar-item nav-style-guide" href="#">About</a>
              <a class="navbar-item nav-features" href="#">FAQ</a>
              <a class="navbar-item nav-tech" href="#">Login</a>
              <a class="navbar-item nav-web" href="#">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- NAVBAR END -->

    <!-- HERO START -->
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
                  type="text"
                  class="input"
                  placeholder="Driller">
              </div>
              <div class="level-item">
                <span>Searching "Coding"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HERO END -->

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

export default {
  name: 'App'

  // npm install --save css-loader@^5
  // npm install --save sass-loader@^10
  // npm install sass
}
</script>

<style lang="scss">
  .hero-section {
    position: relative;
  }
  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
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
