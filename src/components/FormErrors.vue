<template>
  <div
    v-for="error of errors"
    :key="error.$uid"
    class="form-error">
    <div
      class="help is-danger">
      {{error.$message}}
    </div>
  </div>
</template>

<script>

export default{
  props: {
    errors: {
      type: Array,
      required: true,
    }
  }
}
</script>
