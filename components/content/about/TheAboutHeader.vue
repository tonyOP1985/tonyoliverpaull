<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 2px solid #30c9e8;
}
</style>
