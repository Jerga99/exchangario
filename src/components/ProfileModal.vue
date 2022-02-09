<template>
  <exchange-modal
    ref="exchangeModal"
    :onModalSubmit="updateProfile"
  >
    <form>
      <div class="field">
        <label class="title">Username</label>
        <input
          v-model="userProfile.username"
          class="input">
      </div>
      <div class="field">
        <label class="title">Avatar</label>
        <input
          v-model="userProfile.avatar"
          class="input">
      </div>
      <div class="field">
        <label class="title">Info about user</label>
        <input
          v-model="userProfile.info"
          class="input">
      </div>
      <div class="field">
        <label class="title">Address</label>
        <input
          v-model="userProfile.address"
          class="input">
      </div>
      <div class="field">
        <label class="title">Country</label>
        <input
          v-model="userProfile.country"
          class="input">
      </div>
      <div class="field">
        <label class="title">Phone</label>
        <input
          v-model="userProfile.phone"
          class="input">
      </div>
    </form>

    <template #activator>
      <button class="button is-block is-primary is-light is-fullwidth">
        Custom button
      </button>
    </template>

  </exchange-modal>
</template>

<script>
  import ExchangeModal from "../components/Modal.vue";
  export default {
    components: {
      ExchangeModal
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        userProfile: { ...this.user }
      }
    },
    computed: {
      modal() {
        return this.$refs.exchangeModal
      }
    },
    methods: {
      updateProfile() {
        this.$store.dispatch("user/updateProfile", {
          data: this.userProfile,
          onSuccess: () => this.modal.close()
        })
      }
    }
  }
</script>
