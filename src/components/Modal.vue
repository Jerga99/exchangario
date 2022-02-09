
<template>
  <div>
    <button
      @click="isOpen = true"
      class="button is-block is-success is-light is-fullwidth">Update Info</button>
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Update Data</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot />
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-success">
            Save changes
          </button>
          <button @click="isOpen = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

