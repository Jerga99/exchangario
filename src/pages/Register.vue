<template>
  <div class="page-wrapper">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Register</h3>
        <div class="box">
          <form>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.email"
                  class="input is-large"
                  type="email"
                  placeholder="Email"
                  autocomplete="email">
                <div
                  class="form-error">
                  <div class="help is-danger">Invalid Value</div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.username"
                  class="input is-large"
                  type="text"
                  placeholder="Username"
                >
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.password"
                  class="input is-large"
                  type="password"
                  placeholder="Password"
                  autocomplete="current-password">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.passwordConfirmation"
                  class="input is-large"
                  type="password"
                  placeholder="Repeat the password"
                >
              </div>
            </div>
            <button
              @click="register"
              :disabled="isProcessing"
              type="button"
              class="button is-block is-info is-large is-fullwidth">
              Sign Up
            </button>
          </form>
        </div>
        <p class="has-text-grey">
          <a>Sign In With Google</a>&nbsp;
          <a>Sign Up</a>&nbsp;·&nbsp;
          <a href="../">Need Help?</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import useAuth from "../composition/useAuth";

export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
      }
    }
  },
  setup() {
    return useAuth();
  },
  watch: {
    error(message) {
      if (message) { alert(message); }
    },
    isProcessing(processing, prevProcessing) {
      if (!processing && prevProcessing && !this.error ) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    register() {
      this.$store.dispatch("user/register", this.form)
    }
  }
}
</script>
<style scoped>
  /* Left formatting  */
  /* .form-error {
    text-align: initial;
  } */
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 1rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>
