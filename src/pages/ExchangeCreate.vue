<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="form-container">
        <form>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <div class="select">
                <select v-model="form.type">
                  <option value="service">Service</option>
                  <option value="product">Product</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="form.title"
                class="input"
                type="text"
                placeholder="Some Nice Product"
              />
              <div
                class="form-error">
                <div class="help is-danger">Error Message</div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                v-model="form.description"
                class="textarea"
                placeholder="Some catchy description about product">
              </textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Image Link</label>
            <div class="control">
              <input
                v-model="form.image"
                class="input"
                type="text"
                placeholder="https://unsplash....">
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input
                v-model="form.price"
                class="input"
                type="number"
                placeholder="249">
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input
                v-model="form.country"
                class="input"
                type="text"
                placeholder="Slovakia">
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input
                v-model="form.city"
                class="input"
                type="text"
                placeholder="Bratislava">
            </div>
          </div>

          <!-- TODO: provide tags inputs -->
          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="programming">
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button
                type="button"
                @click="createExchange"
                class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        type: "product",
        image: "",
        price: null,
        country: "",
        city: "",
        tags: []
      }
    }
  },
  methods: {
    createExchange() {
      alert(JSON.stringify(this.form));
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 40px;
}
.tag {
  margin: 3px;
}
</style>
