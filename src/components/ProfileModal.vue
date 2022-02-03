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
        console.log(this.userProfile);
      }
    }
  }
</script>
