<template>
  <section class="posts">
    <div class="container">
      <div class="posts-type">Latest Posts</div>
      <div class="columns is-multiline">
        <div
          v-for="exchange in exchanges"
          :key="exchange.id"
          class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
          <div class="item post-card bottom-border">
            <router-link
              :to="{name: 'ExchangeDetail', params: {slug: exchange.slug}}"
              class="item-link"
            >
              <figure
                class="image is-2by1 item-figure background-img"
                :style="{ 'background-image': `url(${exchange.image})` }"
                alt=""
              >
              </figure>
              <div class="item-featured">
                <div class="exchange-icon">
                  <font-awesome-icon
                    icon="star"
                  />
                </div>
              </div>
            </router-link>
            <div class="item-tags">
              <a
                v-for="tag in exchange.tags"
                :key="tag"
                class="button is-rounded"
                href="#">
                #{{tag}}
              </a>
            </div>
            <h2
              class="title item-title is-size-4 has-text-weight-extra-bold">
              <a class="item-link" href="#">{{exchange.title}}</a>
            </h2>
            <div class="level">
              <div class="level-left">
                <div class="item-author">{{exchange.type}}</div>
              </div>
              <div class="level-right">
                {{exchange.createdAt.toDate().toDateString()}}
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

  .exchange-icon {
    color: #ffbc8c;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
