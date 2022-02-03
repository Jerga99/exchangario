<template>
  <div>
    <button
      @click="isOpen = true"
      class="button is-block is-success is-light is-fullwidth">Update Info</button>
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">User Profile</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body">
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
        </section>
        <footer class="modal-card-foot">
          <button
            @click="updateProfile"
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
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        isOpen: false,
        userProfile: { ...this.user }
      }
    },
    methods: {
      updateProfile() {
        this.$store.dispatch("user/updateProfile", {
          data: this.userProfile,
          onSuccess: () => this.isOpen = false
        })
      }
    }
  }
</script>
