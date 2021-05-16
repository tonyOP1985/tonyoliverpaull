<template>
  <section :class="{ 'margin-bottom': marginBottom }">
    <slot name="content" />
  </section>
</template>

<script>
export default {
  props: {
    marginBottom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 210px;
  // background-color: rgba(72, 206, 181, 0.8);
  background-color: rgba(50, 206, 190, 0.9);
  color: #fff;
}

.margin-bottom {
  margin-bottom: 86px;
}
</style>
