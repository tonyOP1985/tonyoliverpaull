<template>
  <div class="input-wrapper" :class="{ 'pb-3': requiredField }">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :required="requiredField"
      @input="updateValue"
    >
    <p v-if="!requiredField">(Optional)</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: true
    },
    requiredField: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    updateValue (event) {
      const value = event?.target?.value

      if (!value) { this.$emit('input', '') }

      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
}

.pb-3 {
  padding-bottom: 12px;
}

label {
  font-size: 12px;
  font-weight: bold;
}

p {
  font-size: 12px;
  height: 20px;
}

input {
  font-size: 1rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid #757575;
  border-radius: 4px;
}
</style>
