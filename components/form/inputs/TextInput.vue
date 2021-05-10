<template>
  <div class="input-wrapper">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :required="requiredField"
      @change="updateValue"
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
    updateValue ({ target }) {
      const { name, value } = target
      this.$emit('update-value', { name, value })
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  margin-bottom: 10px;
}

label {
  font-size: 12px;
  font-weight: bold;
}

p {
  font-size: 12px;
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
