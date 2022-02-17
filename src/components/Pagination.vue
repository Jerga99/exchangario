<template>
  <nav class="pagination is-rounded  is-centered" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li>
        <button
          @click="() => onNextPage({page: 'previous'})"
          :disabled="isFetching"
          type="button"
          class="pagination-previous has-text-weight-bold">Previous</button>
      </li>
      <li>
        <button
          type="button"
          class="pagination-link button has-text-weight-bold is-primary">Page {{page}}</button>
      </li>
      <li>
        <button
          @click="() => onNextPage({page: 'next'})"
          :disabled="isFetching"
          type="button"
          class="pagination-next has-text-weight-bold">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    onNextPage: {
      type: Function,
      required: true
    },
    isFetching: {
      type: Boolean,
      default: false
    },
    page: {
      type: Number,
      default: 1
    }
  }
}
</script>
