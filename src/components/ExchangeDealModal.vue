
<template>
  <exchange-modal :onModalSubmit="createOpportunity">
    <div class="deal">
      <div class="deal-highlight">{{exchange.user.username}}'s Offer</div>
      <div class="deal-wrapper">
        <div>Offering {{exchange.type}}</div>
        <div>{{exchange.title}}</div>
      </div>
      <div class="deal-highlight">Your Offer</div>
      <div class="counter-offer">
        <div class="field">
          Would you prefer to exchange credit ?
          <label class="checkbox is-large">
            <input
              v-model="isPriceExchange"
              type="checkbox">
            Yes
          </label>
        </div>
        <div class="field">
          <label class="label">How Much Credit ?</label>
          <div class="control">
            <input
              v-model="selectedPrice"
              :disabled="!isPriceExchange"
              class="input"
              type="number"
              placeholder="40">
            <i>
              You don't have enough of credit
            </i>
          </div>
        </div>
        <div class="field">
          <label class="label">Exchange</label>
          <div class="control">
            <div class="select">
              <select :disabled="isPriceExchange">
                <option
                  v-for="exchange in availableExchanges"
                  :key="exchange.slug"
                  :value="exchange"
                >
                  {{exchange.title}}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div>
          Your price is: <span class="deal-highlight">1000$</span>
        </div>
        <div
          class="price price">
          You are offering the exact same amount
        </div>
        <i>Allowed difference is not less than 20%</i>
      </div>
    </div>
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
  props: {
    exchange: {
      type: Object,
      required: true
    },
    availableExchanges: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedPrice: null,
      isPriceExchange: false,
    }
  },
  methods: {
    createOpportunity() {
      alert("Submiting form!");
    }
  }
}
</script>

<style scoped lang="scss">
  .price {
    padding: 7px;
    &-allowed {
      background-color: #cdeacd;
    }
    &-declined {
      background-color: #ffc2c2;
    }
  }
  .deal-wrapper {
    margin-bottom: 10px
  }
  .counter-offer, .deal-wrapper {
    border: 2px solid grey;
    padding: 10px;
    margin-top: 10px;
    &-title {
      font-size: 21px;
      margin: 5px 0;
      font-weight: bold;
    }
  }
  .deal {
    font-size: 19px;
    &-highlight {
      font-size: 19px;
      font-weight: bold;
    }
  }
  .disabled {
  &.field {
    input, textarea, select {
      pointer-events: none;
      color: grey;
    }
    label {
      color: grey;
    }
  }
}
</style>
