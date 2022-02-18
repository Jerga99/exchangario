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
        <div class="file has-name">
          <label class="file-label">
            <input
              @change="handleUpload"
              class="file-input"
              type="file"
              name="resume"
            >
            <span class="file-cta">
              <span class="file-icon">
                <font-awesome-icon
                  icon="upload"
                />
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
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
        Update Profile
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
      },
      handleUpload(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);

        reader.onload = function() {
          console.log(reader.result);
        }
      }
    }
  }
</script>
