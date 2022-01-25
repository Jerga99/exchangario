<template>
  <section class="posts">
    <div class="container">
      {{exchanges}}
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
</template>
<script>
export default {
  props: {
    exchanges: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
  }
</style>
