
<template>
  <exchange-modal
    :onModalSubmit="createOpportunity"
  >
    <div>Some Deal</div>
    <template #activator>
      <button class="button is-fullwidth is-large is-danger is-outlined m-b-sm">
        Make a deal
      </button>
    </template>
  </exchange-modal>
</template>

<script>
import ExchangeModal from "./Modal.vue";
export default {
  components: {
    ExchangeModal
  },
  methods: {
    createOpportunity() {
      alert("Submiting form!");
    }
  }
}
</script>
