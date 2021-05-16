<template>
  <a class="btn" :href="link" target="_blank">
    {{ btnText }}
  </a>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  font-family: 'Montserrat', sans-serif;
  width: 160px;
  margin: 10px 0;
  padding: 10px 0;
  background-color: #30c9e8;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #02abd6;
}
</style>
